import axios from "../../axios";
import history from "../../history";

import { setCategory, incrementScore, startGame, updateCategory, completeGame, errorCompleting } from "./state";

export const getWords = (category) => (dispatch, getState) => {
    const isGot = getState().categories.find(element => element===category);
    
    if (!isGot) {
        axios.get(`/categories/${category}/words`).then(({ data }) => {
            dispatch(setCategory(data.data, category));
        });
    }

    if (isGot) {
        dispatch(updateCategory(category));
    }
};

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

export const patchCompleteGame = () => {
    return (dispatch, getState) => {
        axios.patch(`games/${getState().id}/complete`, {
            finish: true,
        }).then(({ data }) => {
            dispatch(completeGame(data.data));
            history.push("/results")
        }).catch(error => {
            dispatch(errorCompleting())
        })
    }
}
 

