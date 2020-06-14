import initial from './initial';


const timeOn = (state) => {
    return {
        ...state,
        timerActive: true,
    }
}


const reducer = (state, action) => {
    switch (action.type) {
      case "TIME_ON": return timeOn(state);
      default: return state;
    }
}

export default reducer;