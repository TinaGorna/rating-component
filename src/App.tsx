import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./components/Rating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className="App">
            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />

        </div>
    );
}

export default App;
