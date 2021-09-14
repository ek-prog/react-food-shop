import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {getFilterCategory} from "../api";

import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category(){
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();

    useEffect(()=>{
        getFilterCategory(name).then((data) => setMeals(data.meals));
    }, [name])
    return <>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        <button className="btn" onClick={goBack}>
            <i className="material-icons">arrow_back</i>
            Go back</button>
    </>;
}

export { Category };