import { createContext } from "react";

export const SwContext = createContext({
    changePage: function (name) {
        console.log(name);
    }
});