import React, { useEffect, useState } from "react";
import Cocktail from "../../Components/Cocktail";
import LoadingCocktail from "../../Components/LoadingCocktail";
import { debounce } from "../../Helper/debounce";
import useCocktailSearch from "../../Hooks/useCocktailSearch";
import { useGlobalContext } from "../../Helper/context";
import "./home.css";

function Home() {
    const [query, setQuery] = useState("");
    const [cocktail, setCocktail] = useState([]);
    const loadingDetailArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // this is to map over loading elements to give ids
    const { closeNavBar } = useGlobalContext();

    let { cocktails, isLoading, isError } = useCocktailSearch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query,
        1
    );

    const updateQuery = debounce((text) => {
        setQuery(text);
    });

    const getSearchTerm = (text) => {
        updateQuery(text);
    };

    useEffect(() => {
        if (!isLoading) {
            console.log(cocktails);
            setCocktail(cocktails.drinks);
        }
    }, [isLoading, cocktails, cocktails.drinks]);

    return (
        <section onClick={closeNavBar} className='home_section'>
            <div className='search_container'>
                <form
                    action=''
                    className='search_form'
                    onSubmit={(e) => e.preventDefault()}
                >
                    <label htmlFor='cocktailSearch' className='search__label'>
                        search your favourite cocktail
                    </label>
                    <input
                        type='text'
                        id='cocktailSearch'
                        autoFocus={true}
                        onChange={(e) => getSearchTerm(e.target.value)}
                    />
                </form>
            </div>
            <section className='cocktails_section'>
                <h1 className='cocktails__title'>Cocktails</h1>
                <div className='cocktails_container'>
                    {isError ? (
                        <div className='error'>
                            Something went wrong. Please try again.
                        </div>
                    ) : isLoading ? (
                        loadingDetailArr.map((id) => {
                            return <LoadingCocktail key={id}></LoadingCocktail>;
                        })
                    ) : cocktail === null ? (
                        <div className='noResults'>no results</div>
                    ) : (
                        cocktail.map((drink) => {
                            return (
                                <Cocktail
                                    key={drink.idDrink}
                                    {...drink}
                                ></Cocktail>
                            );
                        })
                    )}
                </div>
            </section>
        </section>
    );
}

export default Home;
