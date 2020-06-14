import axios from "../../axios";

import { timeOn, incrementScore, startGame } from "./state";

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

export const postGame = ({ team_1, team_2 }) => {
    return (dispatch) => {
        axios.post('/games', {
            team_1,
            team_2,
            score_1: 0,
            score_2: 0,
            complete: false,
        }).then(({ data }) => {
            dispatch(startGame(data.data));
        })
    };
}
 

