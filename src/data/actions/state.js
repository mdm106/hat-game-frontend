export const timeOn = ( data ) => {
    return {
        type: "TIME_ON",
        words: data,
    };
};

export const incrementScore = ( {score_1, score_2 }) => {
    return {
        type: "INCREMENT_SCORE",
        score_1,
        score_2,
    }
}

export const changeWord = () => {
    return {
        type: "PASS",
    };
}

export const startGame = ( { team_1, team_2, id }) => {
    return {
        type: "START_GAME",
        team_1,
        team_2,
        id,
    }
}