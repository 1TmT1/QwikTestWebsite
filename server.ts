import express, { Express } from "express";
import type { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

//Determin Root Domain
const rootDoamin = process.env.NODE_ENV === "development" ? process.env.ROOT_DOMAIN_DEV : process.env.ROOT_DOMAIN_PROD;
const app: Express = express();
const port = 3005;
const route = "/api_v1";

app.use(cookieParser());
app.use(cors({ origin: rootDoamin, credentials: true }));
app.use(bodyParser.json());

// Health
app.get(route + "/health", async(req: Request, res: Response) => {
    return res.status(200).json({ message: "Healthy" });
});


// Logout
app.get(route + "/logout", async(req: Request, res: Response) => {
    res.cookie("server-access-token", "", { maxAge: 0 });
    res.cookie("server-refresh-token", "", { maxAge: 0 });
    return res.status(200).json({ message: "Cookie Destroyed:-(" });
});


// Store Auth Cookies
app.post(route + "/store-auth", async(req: Request, res: Response) => {
    if (!req.body?.accessToken || !req.body?.refreshToken) {
        return res.status(401).json({ message: "Missing Token(s)" });
    }

    // Get Tokens
    const accessToken = req.body.accessToken;
    const refreshToken = req.body.refreshToken;

    // Determine Expiration
    const dateAccess = new Date();
    const dateRefresh = new Date();

    dateAccess.setHours(dateAccess.getHours() + 1);
    dateRefresh.setDate(dateRefresh.getDate() + 1);

    // Set Cookie ==> access token
    res.cookie("server-access-token", accessToken, {
        secure: process.env.NODE_ENV != "development",
        httpOnly: true,
        expires: dateAccess,
        sameSite: "lax",
    });

    // Set Cookie ==> refresh token
    res.cookie("server-refresh-token", refreshToken, {
        secure: process.env.NODE_ENV !== "development",
        httpOnly: true,
        expires: dateRefresh,
        sameSite: "lax",
    });

    // Return Response
    return res.status(200).json({ message: "Tokens Stored!-)" });
});

app.listen(port, () => {
    console.log(`Backend server is listening on port ${port}`);
});
