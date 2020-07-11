import { connect } from "react-redux";

import GameHistory from "./GameHistory";
import { getGames } from "../../data/actions/api";

const mapStateToProps = ({ gameHistory }) => {
  return {
    gameHistory
    };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoad: () => dispatch(getGames()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameHistory);