import { component$, useVisibleTask$, useSignal, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { supabase } from "~/utils/supabase";
import { UserSessionContext } from "~/root";
import type { UserSession } from "~/root";
import axios from "axios";

export default component$(() => {
    
    const userSession: UserSession = useContext(UserSessionContext) as UserSession;
    const isProtectedOk = useSignal(false);
    const nav = useNavigate();

    useVisibleTask$(() => {
        const timeout = setTimeout(async() => {
            const { data, error } = await supabase.auth.getUser();

            const { data: { session }} = await supabase.auth.getSession();

            if (session){
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
                    userSession.userId = session.user.id;
                    userSession.isLoggedIn = true;
                }).catch((err) => {
                    console.log(err);
                });
            }

            if(data.user?.id){
                isProtectedOk.value = true;
                userSession.userId = data.user.id;
                userSession.isLoggedIn = true;
                nav("/members/dashboard");
            } else {
                console.log(error);
                userSession.userId = "";
                userSession.isLoggedIn = false;
                nav("/login");
            }
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    });

    return (
        <>
            <div>
                {isProtectedOk.value ? (
                    <>
                        <span>Redirecting to </span>
                        <Link href="/members/dashboard"><button class="text-sky-500 hover:text-sky-600">Dashboard</button></Link>
                    </>
                ):(
                    <>
                        Please log in
                    </>
                )}
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Staging",
    meta: [
        {
            name: "description",
            content: "this is the home page",
        },
    ],
}