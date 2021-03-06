import React from "react";
import { Link } from "react-router-dom";


const Completion = ({ id, team_1, team_2, score_1, score_2, complete }) => {

    let decideWinner = (score_1, score_2, team_1, team_2) => {
        if(score_1 > score_2) {
            return team_1;
        } else if (score_2 > score_1) {
            return team_2;
        } else {
            return "draw";
        }
    };

    let winner = decideWinner(score_1, score_2, team_1, team_2);

    return (
        <div style={{
            backgroundColor: "#84BCDA",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "hidden",
        }}> 
            {!complete ? 
            <div className="container text-center mb-4">
                <h1>Opps, your game isn't complete!</h1>
            </div> : 

            <div className="container text-center mb-4">
                { winner === "draw" ?
                <h1>It's a draw! Well done to both teams!</h1> : 
                <h1>{`${winner} are the winners! Great job!`}</h1> } 
            </div>}
            <div className="container text-center">
                <Link to ="/">
                    <button className="btn btn-danger m-1">
                        Go back to home
                    </button>
                </Link>
                <Link to ="/game-history">
                    <button className="btn btn-info m-1">
                        View previous game results
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Completion;