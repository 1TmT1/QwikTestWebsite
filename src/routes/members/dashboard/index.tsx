import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, routeLoader$, useNavigate } from "@builder.io/qwik-city";
import type { RequestEvent, DocumentHead } from "@builder.io/qwik-city";
import { getUserProfile } from "~/utils/helpers";

interface SessionData {
    isSession: boolean;
    user: any;
    role: string;
}

export const onGet = async({ sharedMap, redirect, cookie }: RequestEvent) => {
    
    const profile = await getUserProfile(cookie);
    
    if (profile.role != "free") {
        throw redirect(302, "/login");
    }

    sharedMap.set("profile", profile);
};

export const useGetProfile = routeLoader$(({ sharedMap }) => {
    return sharedMap.get("profile") as SessionData;
});

export default component$(() => {
    const isShow = useSignal(false);
    const sessionData = useGetProfile();
    const nav = useNavigate();

    useTask$(() => {
        if (!sessionData.value.isSession) {
            nav("/login");
        } else {
            isShow.value = true;
        }
    });

    return (
        <main>
            {isShow.value && (
                <div class="text-gray-900">
                    <div class="text-2xl">
                        Welcome to the Dashboard Page
                    </div>
                    <Link href="/"><button class="text-sm text-sky-500 hover:text-sky-400">Home Page</button></Link>
                </div>
            )}
        </main>
    );
});

export const head: DocumentHead = {
    title: "Dashboard",
    meta: [
        {
            name: "description",
            content: "Members dashboard for Test Web App",
        },
    ],
};