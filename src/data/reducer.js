const gameStart = (state, {team_1, team_2, id}) => {
    return {
        ...state,
        team_1,
        team_2,
        id,
    }
}

const categoryOn = (state, {words, category}) => {
    let newCategories = state.categories;
    newCategories.push(category);
    if(category===1){
        return {
            ...state,
            science: words,
            categories: newCategories,
            category: category,
        }
    } else if (category===2){
        return {
            ...state,
            celebrities: words,
            categories: newCategories,
            category: category,
        }
    } else if (category===3){
        return {
            ...state,
            geography: words,
            categories: newCategories,
            category: category,
        }
    } else if (category===4){
        return {
            ...state,
            object: words,
            categories: newCategories,
            category: category,
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
    if(state.category===1){
        return {
            ...state,
            score_1,
            score_2,
            scienceNumber: state.scienceNumber + 1 < state.science.length ? state.scienceNumber + 1 : 0,
        }
    } else if (state.category===2){
        return {
            ...state,
            score_1,
            score_2,
            celebrityNumber: state.celebrityNumber + 1 < state.celebrities.length ? state.celebrityNumber + 1 : 0,
        }
    } else if (state.category===3){
        return {
            ...state,
            score_1,
            score_2,
            geographyNumber: state.geographyNumber + 1 < state.geography.length ? state.geographyNumber + 1 : 0,
        }
    } else if (state.category===4){
        return {
            ...state,
            score_1,
            score_2,
            objectNumber: state.objectNumber + 1 < state.object.length ? state.objectNumber + 1 : 0,
        }
    } 
}

const passWordChange = (state) => {
    if(state.category===1){
        return {
            ...state,
            scienceNumber: state.scienceNumber + 1 < state.science.length ? state.scienceNumber + 1 : 0,
        }
    } else if (state.category===2){
        return {
            ...state,
            celebrityNumber: state.celebrityNumber + 1 < state.celebrities.length ? state.celebrityNumber + 1 : 0,
        }
    } else if (state.category===3){
        return {
            ...state,
            geographyNumber: state.geographyNumber + 1 < state.geography.length ? state.geographyNumber + 1 : 0,
        }
    } else if (state.category===4){
        return {
            ...state,
            objectNumber: state.objectNumber + 1 < state.object.length ? state.objectNumber + 1 : 0,
        }
    } 
}

const completeGameReducer = (state, {complete}) => {
    return {
        ...state,
        complete,
        completeError: false,
    }
}

const errorCompletingReducer = (state) => {
    return {
        ...state,
        completeError: true,
    }
}

const saveGamesReducer = (state, { gameHistory }) => {
    return {
        ...state,
        gameHistory,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
      case "START_GAME": return gameStart(state, action);
      case "CATEGORY_SET": return categoryOn(state, action);
      case "CATEGORY_UPDATE": return categoryUpdate(state, action);
      case "INCREMENT_SCORE": return increaseScore(state, action);
      case "PASS": return passWordChange(state);
      case "COMPLETE_GAME": return completeGameReducer(state, action);
      case "ERROR_COMPLETING": return errorCompletingReducer(state);
      case "SAVE_GAMES": return saveGamesReducer(state, action);
      default: return state;
    }
}

export default reducer;