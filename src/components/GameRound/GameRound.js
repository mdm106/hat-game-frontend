import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Timer from '../Timer/Timer';
import Alert from 'react-bootstrap/Alert';
import GameSetUp from '../GameSetUp';

const GameRound = ({ team_1, team_2, score_1, score_2, science, celebrities, geography, object, wordNumber, category, handleTimerOn, handleIncrement, handlePass, timerTotal }) => {

    let categoryPicker= (category) => {
        switch (category) {
            case "1": return science[wordNumber];
            case "2": return celebrities[wordNumber];
            case "3": return geography[wordNumber]
            case "4": return object[wordNumber]
            default: return "";
        }
    }

    return (
        <>
            <GameSetUp />
            <Alert variant="info">
                <h3 style={{textAlign: "center", textTransform: "capitalize"}}>{categoryPicker(category)}</h3>
            </Alert>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Team 1</Card.Title>
                        <Card.Text className="display-1">{score_1}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => handleIncrement(1)}>Correct</Button>{' '}
                        <Button variant="danger" onClick={handlePass}>Pass</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Team 2</Card.Title>
                        <Card.Text className="display-1">{score_2}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => handleIncrement(2)}>Correct</Button>{' '}
                        <Button variant="danger" onClick={handlePass}>Pass</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <div className="container">
                <Timer timerTotal={timerTotal} starter={handleTimerOn} />
            </div>
        </>
    )
}

export default GameRound;