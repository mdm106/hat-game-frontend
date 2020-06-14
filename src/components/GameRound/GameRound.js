import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import Alert from 'react-bootstrap/Alert';

const GameRound = ({ timerActive, team_1, team_2, score_1, score_2, handleTimerOn }) => {
    return (
        <>
            <Jumbotron>
                <h1>Round: Science</h1>
            </Jumbotron>
            <Alert variant="info">
                <h1 style={{textAlign: "center"}}>Word</h1>
            </Alert>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Team 1</Card.Title>
                        <Card.Text className="display-1">0</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Correct</Button>
                        <Button variant="danger">Pass</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Team 2</Card.Title>
                        <Card.Text className="display-1">0</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Correct</Button>
                        <Button variant="danger">Pass</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <div className="container">
                <Timer active={timerActive} duration="45000">
                    <Timecode />
                </Timer>
                <Button variant="success" onClick={handleTimerOn}>Go</Button>
            </div>
        </>
    )
}

export default GameRound;