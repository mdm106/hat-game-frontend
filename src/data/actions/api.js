import axios from "../../axios";

import { timeOn, incrementScore } from "./state";

export const getWords = () => {
    return (dispatch) => {
        axios.get('/categories/1/words').then(({ data }) => {
            dispatch(timeOn(data.data));
        })
    }
}

export const patchScore = (team) => {
    return (dispatch, getState) => {
        axios.patch(`games/${getState().id}/score`, {
            team: team,
        }).then(({ data }) => {
            dispatch(incrementScore(data.data));
        })
    };
}