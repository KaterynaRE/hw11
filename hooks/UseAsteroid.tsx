import { useContext } from "react";
import {AsteroidContext} from "../contexts/AsteroidContext";

export const useAsteroid = () => {
    const context = useContext(AsteroidContext);
    if (!context)
        throw Error("You should provide AsteroidContext!")
    return context;
}
