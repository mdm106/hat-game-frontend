// below shuffle function obtained from https://github.com/coolaj86/knuth-shuffle
const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


export const setCategory = ( data, category ) => {
    return {
        type: "CATEGORY_SET",
        words: shuffle(data.map((val, i) => val.word)),
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

export const completeGame = ({ complete }) => {
    return {
        type: "COMPLETE_GAME",
        complete,
    }
}

export const errorCompleting = () => {
    return {
        type: "ERROR_COMPLETING",
    }
}