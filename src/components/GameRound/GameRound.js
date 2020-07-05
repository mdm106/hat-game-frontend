import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Timer from '../Timer/Timer';
import Alert from 'react-bootstrap/Alert';
import GameSetUp from '../GameSetUp';

const GameRound = ({ team_1, team_2, score_1, score_2, science, celebrities, geography, object, scienceNumber, celebrityNumber, geographyNumber, objectNumber, category, handleIncrement, handlePass, handleComplete }) => {

    let titlePicker= (category) => {
        switch (category) {
            case 1: return "Science"
            case 2: return "Celebrities"
            case 3: return "Geography"
            case 4: return "Object"
            default: return "";
        }
    }

    let categoryPicker= (category, science, celebrities, geography, object, scienceNumber, celebrityNumber, geographyNumber, objectNumber) => {
        switch (category) {
            case 1: return science[scienceNumber]
            case 2: return celebrities[celebrityNumber]
            case 3: return geography[geographyNumber]
            case 4: return object[objectNumber]
            default: return "";
        }
    }

    let backgroundColorPicker = (category) => {
        switch (category) {
            case 1: return "#ECC30B"
            case 2: return "#D56062"
            case 3: return "#067BC2"
            case 4: return "#F37748"
            default: return "#84BCDA";
        }
    }

    let alertColorPicker = (category) => {
        switch (category) {
            case 1: return "#0bb0ec"
            case 2: return "#60d5d1"
            case 3: return "#06c24e"
            case 4: return "#48e2f3"
            default: return "grey";
        }
    }


    return (
        <div style={{backgroundColor: backgroundColorPicker(category), 
                     minHeight: "100vh",
                     minHeight: "100vh",
                     display: "flex",
                     alignItems: "center"}}>
                <div className="container">
                <GameSetUp />
                <h3 style={{textAlign: "center", 
                            marginBottom: "1rem"}}>
                    {category !== "" ? "Subject: " + titlePicker(category) : "No subject chosen"}</h3>
                {category === "" ? null :
                <Alert style={{backgroundColor: alertColorPicker(category)}}>
                    <h3 style={{textAlign: "center", textTransform: "capitalize"}}>{categoryPicker(category, science, celebrities, geography, object, scienceNumber, celebrityNumber, geographyNumber, objectNumber)}</h3>
                </Alert> }
                <CardGroup>
                    <Card>
                        <Card.Body style={{backgroundColor: "lightGrey"}}>
                            <Card.Title>Team 1</Card.Title>
                            <Card.Text className="display-1">{score_1}</Card.Text>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor: alertColorPicker(category)}}>
                            <Button variant="primary" onClick={() => handleIncrement(1)}>Correct</Button>{' '}
                            <Button variant="danger" onClick={handlePass}>Pass</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body style={{backgroundColor: "lightGrey"}}>
                            <Card.Title>Team 2</Card.Title>
                            <Card.Text className="display-1">{score_2}</Card.Text>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor: alertColorPicker(category)}}>
                            <Button variant="primary" onClick={() => handleIncrement(2)}>Correct</Button>{' '}
                            <Button variant="danger" onClick={handlePass}>Pass</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <div className="container">
                    <Timer />
                </div>
                <div className="container text-center">
                    <Button variant="dark"
                            onClick={ handleComplete }>
                        Complete Game!</Button>
                </div>
            </div>
            </div>
    )
}

export default GameRound;