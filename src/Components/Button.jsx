import React from "react";

function Button({ text, className, onClick }) {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
