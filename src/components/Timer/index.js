import { connect } from "react-redux";

import Timer from "./Timer";


const mapStateToProps = ({ timerTotal, id}) => {
    return {
        timerTotal,
        id
      };
  };

const mapDispatchToProps = dispatch => {
    return {
      handleTimerOn: () => {
          dispatch(getWords())
      },
    };
  };


// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(Timer);