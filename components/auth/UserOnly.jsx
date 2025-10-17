import { useEffect } from "react";
import { useUser } from "../../hooks/UseUser";
import { useRouter } from "expo-router";
import ThemedLoader from "../ThemedLoader";


export default function UserOnly({ children, redirectTo = "/login" }) {

    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user === null) {
            router.replace(redirectTo);
        }
    }, [user, authChecked, redirectTo]);

    if (!authChecked || !user)
        return (
            <ThemedLoader />
        )
    return children;
}

// const UserOnly = ({ children }) => {
//     const { user, authChecked } = useUser();
//     const router = useRouter();
//     useEffect(() => {
//         if (authChecked && user === null)
//             router.replace("/login");
//     }, [user, authChecked]);
//     if (!authChecked || !user)
//         return (
//             <ThemedLoader/>
//         )
//     return children;
// }

//export default UserOnly;