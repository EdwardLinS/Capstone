import { useState } from "react";

function BookingForm(props) {

    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guest, setGuest] = useState();
    const [occassion, setOccasion] = useState();
    const [availableTimes, setAvailableTimes] = useState(props.time);

    return (
        <div className="form">
            <h1>This is the BOOKING PAGE</h1>
            <form onSubmit={props.submitForm} style={{display: 'grid', maxWidth: "200px", gap: "20px"}}>
                <label for="res-date">Choose date</label>
                <input
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                        setAvailableTimes(props.time);
                    }}
                    type="date"
                    id="res-date"/>

                <label for="res-time">Choose time</label>
                <select
                    value={time}
                    onChange={(e) => {
                        setTime(e.target.value);
                    }}
                    id="res-time ">
                    {availableTimes.map(time => ( <option>{time}</option> ))}
                </select>
                <label for="guests">Number of guests</label>
                <input
                    value={guest}
                    onChange={(e) => {
                        setGuest(e.target.value);
                    }}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"></input>
                <label for="occasion">Occasion</label>
                <select
                    value={occassion}
                    onChange={(e) => {
                        setOccasion(e.target.value);
                    }}
                    id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"></input>
            </form>
        </div>
    )
}



export default BookingForm;