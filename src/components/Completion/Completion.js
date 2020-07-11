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
            alignItems: "center"
        }}> 
            {!complete ? 
            <div className="container">
                <h1>Opps, your game isn't complete!</h1>
            </div> : 

            <div className="container">
                { winner === "draw" ?
                <h1>It's a draw! Well done to both teams!</h1> : 
                <h1>{`${winner} are the winners! Great job!`}</h1> } 
            </div>}
            <div className="container">
                <Link to ="/">
                    <button className="btn btn-danger">
                        Go back to home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Completion;