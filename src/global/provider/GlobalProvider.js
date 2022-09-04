import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import { getAllCategorys } from "../../services/getAllCategorys"

export const GlobalProvider = ({ children }) => {

    const [categorys, setCategorys] = useState([]);
    const [categorysLoading, setCategorysLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAllCategorys(setCategorys, setCategorysLoading);
    }, []);


    const states = { categorys, categorysLoading, search };
    const setters = { setCategorys, setCategorysLoading, setSearch };
    const data = { states, setters };

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
};