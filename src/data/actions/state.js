export const setCategory = ( data, category ) => {
    return {
        type: "CATEGORY_SET",
        words: data,
        category: category,
    };
};

export const updateCategory = (category) => {
    return {
        type: "CATEGORY_UPDATE",
        category: category,
    }
}

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