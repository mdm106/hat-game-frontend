import { connect } from "react-redux";

import StartGame from "./StartGame";

import { postGame } from "../../data/actions/api";

const mapStateToProps = ({ team_1, team_2 }) => {
    return {
        team_1,
        team_2,
      };
  };

const mapDispatchToProps = dispatch => {
  return {
    handleStartGame: (data) => {
        dispatch(postGame(data));
    }
  };
};


// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(StartGame);