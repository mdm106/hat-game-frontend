import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Timer from '../Timer/Timer';
import Alert from 'react-bootstrap/Alert';
import GameSetUp from '../GameSetUp';

const GameRound = ({ team_1, team_2, score_1, score_2, science, celebrities, geography, object, wordNumber, category, handleIncrement, handlePass, timerTotal }) => {

    let titlePicker= (category) => {
        switch (category) {
            case 1: return "Science"
            case 2: return "Celebrities"
            case 3: return "Geography"
            case 4: return "Object"
            default: return "";
        }
    }

    let categoryPicker= (category, science, celebrities, geography, object, wordNumber) => {
        switch (category) {
            case 1: return science[wordNumber[0]]
            case 2: return celebrities[wordNumber[1]]
            case 3: return geography[wordNumber[2]]
            case 4: return object[wordNumber[3]]
            default: return "";
        }
    }

    return (
        <>
            <GameSetUp />
            <h3>{category !== "" ? "Subject: " + titlePicker(category) : "No subject chosen"}</h3>
            <Alert variant="info">
                <h3 style={{textAlign: "center", textTransform: "capitalize"}}>{categoryPicker(category, science, celebrities, geography, object, wordNumber)}</h3>
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
                <Timer timerTotal={45} />
            </div>
        </>
    )
}

export default GameRound;