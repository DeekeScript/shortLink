import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { get } from "../fetch";

export function useUser(redirectTo: string, redirectIfFound: boolean) {
    const [user, setUser] = useState(null);
    const [finished, setFinished] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storageUser = localStorage.getItem('user');
        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }

        const fetchUser = async () => {
            const { data, code } = await get("user/current", {});
            const hasUser = Boolean(data);

            setUser(code === 0 ? data : null);
            code === 0 ? localStorage.setItem('user', JSON.stringify(data)) : null;
            setFinished(true);

            if (!redirectTo || !finished) return;

            if (
                // If redirectTo is set, redirect if the user was not found.
                (redirectTo && !redirectIfFound && !hasUser) ||
                // If redirectIfFound is also set, redirect if the user was found
                (redirectIfFound && hasUser)
            ) {
                router.push(redirectTo);
            }
        };

        if (!storageUser) {
            fetchUser();
        }
    }, [redirectTo, redirectIfFound, finished, router]);

    return user;
}
