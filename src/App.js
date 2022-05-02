import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, CocktailDetail } from "./Pages";
import { Navbar } from "./Components/Navbar.jsx";
import "./app.css";

function App() {
    return (
        <main>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route
                        path='/cocktail/:idDrink'
                        element={<CocktailDetail></CocktailDetail>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
