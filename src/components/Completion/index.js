import { connect } from "react-redux";

import Completion from "./Completion";


// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
 const mapStateToProps = ({ id, team_1, team_2, score_1, score_2, complete }) => {
  return {
    id,
    team_1,
    team_2,
    score_1,
    score_2,
    complete,
    };
};


// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps)(Completion);