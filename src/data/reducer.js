import initial from './initial';


const timeOn = (state, {words}) => {
    return {
        ...state,
        timerActive: true,
        words: words.map((val, i) => val.word),
    }
}


const reducer = (state, action) => {
    switch (action.type) {
      case "TIME_ON": return timeOn(state, action);
      default: return state;
    }
}

export default reducer;