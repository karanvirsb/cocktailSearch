import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Cocktail({
    idDrink,
    strDrinkThumb,
    strDrink,
    strGlass,
    strAlcoholic,
}) {
    const navigate = useNavigate();
    return (
        <article className='cocktail'>
            <img
                className='cocktail__img'
                src={strDrinkThumb}
                alt={strDrink + " image"}
            />
            <div className='cocktail_container'>
                <h2 className='cocktail__name'>{strDrink}</h2>
                <h4 className='cocktail__glass'>{strGlass}</h4>
                <p className='cocktail__type'>{strAlcoholic}</p>
                <Button
                    text={"details"}
                    className={"cocktail__detailBtn"}
                    onClick={() => navigate(`/cocktail/${idDrink}`)}
                ></Button>
            </div>
        </article>
    );
}

export default Cocktail;
