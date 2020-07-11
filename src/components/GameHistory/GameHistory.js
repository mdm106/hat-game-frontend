import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

import Table from 'react-bootstrap/Table';

const GameHistory = (
    {
        gameHistory,
        handleLoad,
    }
) => {
    useEffect(() => {
        handleLoad()
    }, [handleLoad])

    return (
        <div className="container">
            <h3>Game History</h3>
            <Loading loaded={gameHistory.length}>
                <Table striped borderd>
                    <thead>
                        <tr>
                            <th scope="col">Team 1 Name</th>
                            <th scope="col">Team 2 Name</th>
                            <th scope="col">Score</th>
                            <th scope="col">Winner</th>
                        </tr>
                    </thead>
                    <tbody>
                        { gameHistory.map((game, index) => (
                            <tr key={index} >
                                <td>{game.team_1}</td>
                                <td>{game.team_2}</td>
                                <td>{`${game.score_1} | ${game.score_2}`}</td>
                                <td>
                                    {!game.complete ? "Game not finished" :
                                    game.winner=== "1" ? game.team_1 :
                                    game.winner=== "2" ? game.team_2 : "Game drawn"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="container text-center">
                    <Link to ="/">
                        <button className="btn btn-danger">
                            Go back to home
                        </button>
                    </Link>
                </div>
            </Loading>
        </div>
    )
}

export default GameHistory;