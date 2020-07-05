import { connect } from "react-redux";

import GameRound from "./GameRound";

import { patchScore, patchCompleteGame } from "../../data/actions/api";
import { changeWord } from "../../data/actions/state";
// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
 const mapStateToProps = ({ team_1, team_2, score_1, score_2, scienceNumber, celebrityNumber, geographyNumber, objectNumber, category, science, celebrities, geography, object }) => {
  return {
    team_1,
    team_2,
    score_1,
    score_2,
    scienceNumber,
    celebrityNumber,
    geographyNumber,
    objectNumber,
    category,
    science,
    celebrities,
    geography,
    object,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: (team) => {
        dispatch(patchScore(team))
    },
    handlePass: () => {
        dispatch(changeWord())
    },
    handleComplete: () => {
        dispatch(patchCompleteGame())
    }
  };
};


// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(GameRound);