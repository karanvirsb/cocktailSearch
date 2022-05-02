import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../Helper/context";

function Navbar() {
    const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);
    return (
        <header className={`header ${isMenuOpen && "header__active"}`}>
            <div className='logo'>
                The
                <span className='logo__green'>Cocktail</span>
                DB
            </div>
            <FontAwesomeIcon
                className={`header_menu ${
                    isMenuOpen && "header_menu_inactive"
                }`}
                icon={faBars}
                onClick={() => setIsMenuOpen(true)}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                className={`nav_closeBtn ${
                    isMenuOpen && "nav_closeBtn_active"
                }`}
                icon={faX}
                onClick={() => setIsMenuOpen(false)}
            ></FontAwesomeIcon>
            <nav className={isMenuOpen ? "nav__active" : "nav"}>
                <div className='nav__list'>
                    <Link className='nav__link' to='/'>
                        home
                    </Link>
                    <Link className='nav__link' to='/about'>
                        about
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export { Navbar };
