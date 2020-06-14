import { connect } from "react-redux";

import GameRound from "./GameRound";

import { timeOn } from "../../data/actions/state";
// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
 const mapStateToProps = ({ timerActive, team_1, team_2, score_1, score_2 }) => {
  return {
    timerActive,
    team_1,
    team_2,
    score_1,
    score_2    
    };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTimerOn: () => {
        dispatch(timeOn())
    }
  };
};


// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(GameRound);