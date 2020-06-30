import initial from './initial';

const gameStart = (state, {team_1, team_2, id}) => {
    return {
        ...state,
        team_1,
        team_2,
        id,
    }
}

// below shuffle function obtained from https://github.com/coolaj86/knuth-shuffle
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

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

const timeOn = (state, {words}) => {
    return {
        ...state,
        words: shuffle(words.map((val, i) => val.word)),
    }
}

const increaseScore = (state, {score_1, score_2}) => {
    return {
        ...state,
        wordNumber: state.wordNumber < state.words.length - 1 ? state.wordNumber + 1 : 0,
        score_1,
        score_2,
    }
}

const passWordChange = (state) => {
    return {
        ...state,
        wordNumber: state.wordNumber < state.words.length - 1 ? state.wordNumber + 1 : 0,
    }
}


const reducer = (state, action) => {
    switch (action.type) {
      case "START_GAME": return gameStart(state, action);
      case "TIME_ON": return timeOn(state, action);
      case "INCREMENT_SCORE": return increaseScore(state, action);
      case "PASS": return passWordChange(state);
      default: return state;
    }
}

export default reducer;