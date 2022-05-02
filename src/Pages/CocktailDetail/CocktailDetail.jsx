import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import LoadingCocktailDetail from "../../Components/LoadingCocktailDetail";
import useCocktailSearch from "../../Hooks/useCocktailSearch";
import { useGlobalContext } from "../../Helper/context";
import "./cocktailDetail.css";

function CocktailDetail() {
    // getting the id parameter
    let params = useParams();
    // using navigator to navigate back
    const navigate = useNavigate();
    const { closeNavBar } = useGlobalContext();

    const { cocktails, isLoading, isError } = useCocktailSearch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
            params.idDrink
    );

    // setting the cocktail details state
    const [cocktailDetail, setCocktailDetail] = useState({
        img: "",
        name: "",
        category: "",
        info: "",
        glass: "",
        instructions: "",
        ingredients: [],
    });

    useEffect(() => {
        if (!isLoading) {
            const drink = cocktails.drinks[0];
            // checking to see if each of the ingredient exists if so add them
            const ingredientsArray = [
                drink.strIngredient1 ?? "",
                drink.strIngredient2 ?? "",
                drink.strIngredient3 ?? "",
                drink.strIngredient4 ?? "",
                drink.strIngredient5 ?? "",
                drink.strIngredient6 ?? "",
                drink.strIngredient7 ?? "",
                drink.strIngredient8 ?? "",
                drink.strIngredient9 ?? "",
                drink.strIngredient10 ?? "",
                drink.strIngredient11 ?? "",
                drink.strIngredient12 ?? "",
                drink.strIngredient13 ?? "",
                drink.strIngredient14 ?? "",
                drink.strIngredient15 ?? "",
            ];
            setCocktailDetail({
                img: drink.strDrinkThumb,
                name: drink.strDrink,
                category: drink.strCategory,
                info: drink.strAlcoholic,
                glass: drink.strGlass,
                instructions: drink.strInstructions,
                ingredients: ingredientsArray.filter((item) => item).join(", "), // here we are filtering empty, null or undefined
            });
        }
    }, [isLoading, isError, cocktails.drinks]);

    return (
        <section onClick={closeNavBar} className='detail_section'>
            <Button text={"back home"} onClick={() => navigate("/")}></Button>
            {isError ? (
                <div className='error'> error</div>
            ) : isLoading ? (
                <LoadingCocktailDetail></LoadingCocktailDetail>
            ) : (
                <article className='details_container'>
                    <h1 className='detail__title'>{cocktailDetail.name}</h1>
                    <div className='detail_container'>
                        <img
                            className={"detail__img"}
                            src={cocktailDetail.img}
                            alt={cocktailDetail.name + " image"}
                        ></img>
                        <div className='detail_descContainer'>
                            <p className='detail__label'>
                                <span className='detail__name'>name :</span>
                                {cocktailDetail.name}
                            </p>
                            <p className='detail__label'>
                                <span className='detail__name'>category :</span>
                                {cocktailDetail.category}
                            </p>
                            <p className='detail__label'>
                                <span className='detail__name'>
                                    information :
                                </span>
                                {cocktailDetail.info}
                            </p>
                            <p className='detail__label'>
                                <span className='detail__name'>glass :</span>
                                {cocktailDetail.glass}
                            </p>
                            <p className='detail__label'>
                                <span className='detail__name'>
                                    instructions :
                                </span>
                                {cocktailDetail.instructions}
                            </p>
                            <p className='detail__label'>
                                <span className='detail__name'>
                                    ingredients :
                                </span>
                                {cocktailDetail.ingredients}
                            </p>
                        </div>
                    </div>
                </article>
            )}
        </section>
    );
}

export default CocktailDetail;
