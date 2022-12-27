import React, { useReducer } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

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

function BookingPage(props) {
    return (
        <div>
            <BookingForm time={props.time} submitForm={props.submitForm}/>
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
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const updateTimes = (state, action) => {
        const elem = document.getElementById('res-date');
        const date = new Date(elem.value[0]);
        return (fetchAPI(date))
    }

    const initializeTimes = () => {
        const date = new Date();
        return fetchAPI(date);
    }

    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <main>
            <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage time={state} submitForm={submitForm} />}></Route>
            <Route path="/specials" element={<Specials/>}></Route>
            <Route path="/customers" element={<CustomersSay/>}></Route>
            <Route path="/chicago" element={<Chicago/>}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
          </Routes>
        </main>
    )
}

export default Main;