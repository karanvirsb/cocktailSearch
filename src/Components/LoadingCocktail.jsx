import React from "react";

function LoadingCocktail() {
    return (
        <article className='cocktail'>
            <img className='skeleton skeleton_img' />
            <div className='cocktail_container'>
                <h2 className='skeleton skeleton-text'></h2>
                <h4 className='skeleton skeleton-text'></h4>
                <p className='skeleton skeleton-text'></p>
            </div>
        </article>
    );
}

export default LoadingCocktail;
