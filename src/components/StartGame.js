import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const StartGame = () => {
    return (
        <>
            <Jumbotron>
                <h1>Hat Game</h1>
                <p>Enter team details to start the game</p>
            </Jumbotron>
            <div className="container">
                <Form>
                    <Form.Group controlId="formBasicTeamOne">
                        <Form.Label>Team 1 Name:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formBasicTeamOne">
                        <Form.Label>Team 2 Name:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default StartGame;