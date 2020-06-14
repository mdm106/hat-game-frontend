import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import Alert from 'react-bootstrap/Alert';

const GameRound = ({ timerActive, team_1, team_2, score_1, score_2, words, wordNumber, handleTimerOn, handleIncrement }) => {
    return (
        <>
            <Jumbotron>
                <h1>Round: Science</h1>
            </Jumbotron>
            <Alert variant="info">
                <h3 style={{textAlign: "center", textTransform: "capitalize"}}>{words[wordNumber]}</h3>
            </Alert>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Team 1</Card.Title>
                        <Card.Text className="display-1">{score_1}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => handleIncrement(1)}>Correct</Button>{' '}
                        <Button variant="danger">Pass</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Team 2</Card.Title>
                        <Card.Text className="display-1">{score_2}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => handleIncrement(2)}>Correct</Button>{' '}
                        <Button variant="danger">Pass</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <div className="container">
                <Timer active={timerActive} duration={45000}>
                    <Timecode />
                </Timer>
                <Button variant="success" onClick={handleTimerOn}>Go</Button>{' '}
                <Button variant="info">Reset</Button>
            </div>
        </>
    )
}

export default GameRound;