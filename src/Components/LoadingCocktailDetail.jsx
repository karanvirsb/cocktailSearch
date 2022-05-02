import React from "react";

function LoadingCocktailDetail() {
    return (
        <article className='details_container'>
            <h1 className='detail__title skeleton skeleton-text'></h1>
            <div className='detail_container'>
                <img className={"detail__img skeleton"}></img>
                <div className='detail_descContainer'>
                    <p className='detail__label skeleton skeleton-text'></p>
                    <p className='detail__label skeleton skeleton-text'></p>
                    <p className='detail__label skeleton skeleton-text'></p>
                    <p className='detail__label skeleton skeleton-text'></p>
                    <p className='detail__label skeleton skeleton-text'></p>
                    <p className='detail__label skeleton skeleton-text'></p>
                </div>
            </div>
        </article>
    );
}

export default LoadingCocktailDetail;
