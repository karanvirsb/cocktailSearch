import React, { useContext, useState } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeNavBar = () => {
        setIsMenuOpen(false);
    };

    return (
        <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen, closeNavBar }}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
