import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useUser = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw Error("You should provide AuthContext and wrap components by AuthProvider!")
    return context;
}
