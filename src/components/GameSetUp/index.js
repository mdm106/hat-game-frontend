import { connect } from "react-redux";

import GameSetUp from "./GameSetUp";

import { getWords } from "../../data/actions/api";

const mapDispatchToProps = dispatch => {
  return {
    handleGameSetUp: (data) => {
        dispatch(getWords(+data.category));
    }
  };
};


// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(null, mapDispatchToProps)(GameSetUp);