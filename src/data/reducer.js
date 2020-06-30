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

const categoryOn = (state, {words, category}) => {
    let shuffledWords = shuffle(words.map((val, i) => val.word));
    let newCategories = state.categories;
    newCategories.push(category);
    if(category===1){
        return {
            ...state,
            science: shuffledWords,
            categories: newCategories,
            category: category,
        }
    } else if (category===2){
        return {
            ...state,
            celebrities: shuffledWords,
            categories: newCategories,
            category: category,
        }
    } else if (category===3){
        return {
            ...state,
            geography: shuffledWords,
            categories: newCategories,
            category: category,
        }
    } else if (category===4){
        return {
            ...state,
            object: shuffledWords,
            categories: newCategories,
            category: category,
        }
    } else {
        return {
            ...state,
        }
    }
}

const categoryUpdate = (state, {category}) => {
    return {
        ...state,
        category,
    }
}



const increaseScore = (state, {score_1, score_2}) => {
    let categoryNamePicker= (category) => {
        switch (category) {
            case 1: return state.science.length
            case 2: return state.celebrities.length
            case 3: return state.geography.length
            case 4: return state.object.length
            default: return "";
        }
    }
    return {
        ...state,
        wordNumber: state.wordNumber < categoryNamePicker(state.category) - 1 ? state.wordNumber + 1 : 0,
        score_1,
        score_2,
    }
}

const passWordChange = (state) => {
    let categoryNamePicker= (category) => {
        switch (category) {
            case 1: return state.science.length
            case 2: return state.celebrities.length
            case 3: return state.geography.length
            case 4: return state.object.length
            default: return "";
        }
    }
    return {
        ...state,
        wordNumber: state.wordNumber < categoryNamePicker(state.category) - 1 ? state.wordNumber + 1 : 0,
    }
}


const reducer = (state, action) => {
    switch (action.type) {
      case "START_GAME": return gameStart(state, action);
      case "CATEGORY_SET": return categoryOn(state, action);
      case "CATEGORY_UPDATE": return categoryUpdate(state, action);
      case "INCREMENT_SCORE": return increaseScore(state, action);
      case "PASS": return passWordChange(state);
      default: return state;
    }
}

export default reducer;