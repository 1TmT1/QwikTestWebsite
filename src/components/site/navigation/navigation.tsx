import { component$, $, useSignal, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { Button } from "~/components/button";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { UserSessionContext } from "~/root";
import type { UserSession } from "~/root";
import { supabase } from "~/utils/supabase";

export const Navigation = component$(() => {

    const userSession: UserSession = useContext(UserSessionContext) as UserSession;
    const isSession = useSignal(false);
    const nav = useNavigate();
    
    // Handle Logout
    const handleLogout = $(async() => {

        // Handle Server Side

        // Handle Client Side
        await supabase.auth.signOut();
        nav("/");
    });

    useVisibleTask$(({ track }) => {
        track(userSession)

        if (userSession.isLoggedIn) {
            isSession.value = true;
        } else {
            isSession.value = false;
        }
    });

    return (
        <nav class="bg-white py-4 px-7 sticky">
        <div class="flex justify-between items-center">
            <Button title="LOGO"/>
            <div class="flex items-center text-sm">
            <ul class="flex space-x-10">
                <li>
                <Link href="/about">About</Link>
                </li>
                <li>
                <Link href="/shop">Shop</Link>
                </li>
                <li>
                <Link href="/services">Services</Link>
                </li>
            </ul>
            <div class="border-r border-gray-300 h-10 ml-10"></div>
            {/* @ts-ignore */}
            {isSession.value && (
                <>
                <button onClick$={handleLogout} class="ml-10">
                    Logout
                </button>
                <Link href="/members/dashboard">
                    <Button
                    title="Dashboard"
                    classText="mr-5 ml-10 bg-sky-500 border border-sky-500 hover:bg-sky-400 text-white"
                    />
                </Link>
                </>
            )}
            {/* @ts-ignore */}
            {!isSession.value && (
                <>
                <Link href="/login">
                    <Button
                    title="Log In"
                    classText="mr-5 ml-5 bg-green-500 border border-green-500 hover:bg-green-400 text-white"
                    />
                </Link>
                <Link href="/signup">
                    <Button
                    title="Sign Up"
                    classText="mr-5 ml-5 bg-green-500 border border-green-500 hover:bg-green-400 text-white"
                    />
                </Link>
                </>
            )}
            </div>
        </div>
        </nav>
    );
});