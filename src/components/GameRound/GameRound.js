import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

const GameRound = () => {
    return (
        <>
            <Jumbotron>
                <h1>Round: Science</h1>
            </Jumbotron>
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
                <Timer active={false} duration="45000">
                    <Timecode />
                </Timer>
                <Button variant="success">Go</Button>
            </div>
        </>
    )
}

export default GameRound;