import axios from "../../axios";

import { timeOn } from "./state";

export const getWords = () => {
    return (dispatch) => {
        axios.get('/categories/1/words').then(({ data }) => {
            dispatch(timeOn(data.data));
        })
    }
}