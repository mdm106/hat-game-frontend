import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

import Jumbotron from 'react-bootstrap/Jumbotron';
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

        <div style={{
            backgroundColor: "#84BCDA",
            minHeight: "100vh",
            overflowY: "hidden",
        }}>
            <div className="container mt-3">
                    <Jumbotron
                        className="text-center"
                        style={{ backgroundColor: "#067BC2",
                                color: "white"}}>
                        <h1>The Great Hat Game</h1>
                        <h3>Previous game results</h3>
                    </Jumbotron>
                <Loading loaded={gameHistory.length}>
                    <Table responsive striped bordered variant="light">
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
                            <button className="btn btn-danger mb-2">
                                Go back to home
                            </button>
                        </Link>
                    </div>
                </Loading>
            </div>
        </div>
    )
}

export default GameHistory;