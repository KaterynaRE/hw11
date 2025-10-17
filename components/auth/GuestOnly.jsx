import { useRouter } from "expo-router";
import { useUser } from "../../hooks/UseUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

export default function GuestOnly({ children, redirectTo = "/(auth)/register" }) {

    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user != null) {
            router.push(redirectTo);
        }
    }, [user, authChecked, redirectTo]);

    if (!authChecked)
        return (
            <ThemedLoader />
        )
    return children;
}

