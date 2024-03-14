import { component$, useVisibleTask$, useStore, useContextProvider, createContextId } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { supabase } from "./utils/supabase";
import "./global.css";
import axios from "axios";

export const UserSessionContext = createContextId("user-session");

export type UserSession = {
  userId: string;
  isLoggedIn: boolean;
};

export default component$(() => {

  const userSession: UserSession = useStore({ userId: "", isLoggedIn: false });

  useVisibleTask$(async() => {
    const { data } = await supabase.auth.getUser();
    if (data.user?.id) {
      // Set auth state context
      userSession.userId = data.user.id;
      userSession.isLoggedIn = true;
    } else {
      // set auth state context
      userSession.userId = "";
      userSession.isLoggedIn = false;
    }
  });

  useVisibleTask$(async() => {
    const {data: authListener} = await supabase.auth.onAuthStateChange(async(event: string, session: any) => {
      console.log(event);

      if (event === "SIGNED_IN" && session?.access_token && session?.refresh_token) {
        // Send cookies to server
        const body = {
          accessToken: session.access_token,
          refreshToken: session.refresh_token,
        }

        // Send request to server
        await axios.post("/api_v1/store-auth", body, {
          withCredentials: true,
        }).then((res) => {
          console.log(res.data);

          // Set auth state context
          userSession.userId = session?.user?.id;
          userSession.isLoggedIn = true;
        }).catch((err) => {
          console.log(err);
        });
      }

      if (event === "SIGNED_OUT"){
        // Sign out user on server

        // Send request to server
        await axios.get("/api_v1/logout").then((res) => {
          console.log(res.data);

          // set auth state context
          userSession.userId = "";
          userSession.isLoggedIn = false;
        }).catch((err) => {
          console.log(err);
        });
      }
    });

    // Cleanup event listener
    return () => {
      authListener.subscription.unsubscribe();
    }
  });

  //Pass state to children via context
  useContextProvider(UserSessionContext, userSession)
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="Mona-Sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous"></link>
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
