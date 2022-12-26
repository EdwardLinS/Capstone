import React from "react";
import {Routes, Route} from 'react-router-dom';

function HomePage() {
    return (
        <div className="home">
            <div className="background"></div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2> <br></br>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
    )
}

function BookingPage() {
    return (
        <div>
            <h1>This is the BOOKING PAGE</h1>
        </div>
    )
}

function Specials() {
    return (
        <div>
            <h1>This is the SPECIALS</h1>
        </div>
    )
}

function CustomersSay() {
    return (
        <div>
            <h1>This is the CUSTOMERS SAY</h1>
        </div>
    )
}

function Chicago() {
    return (
        <div>
            <h1>This is the CHICAGO</h1>
        </div>
    )
}

function Main() {
    return (
        <main>
            <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/specials" element={<Specials/>}></Route>
            <Route path="/customers" element={<CustomersSay/>}></Route>
            <Route path="/chicago" element={<Chicago/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;