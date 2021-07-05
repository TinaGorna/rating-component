import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "./Rating";

export default {
    title: "Rating stories",
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} onClick={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}