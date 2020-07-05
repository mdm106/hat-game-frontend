import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Timer from '../Timer/Timer';
import Alert from 'react-bootstrap/Alert';
import GameSetUp from '../GameSetUp';

const GameRound = ({ id, team_1, team_2, score_1, score_2, science, celebrities, geography, object, scienceNumber, celebrityNumber, geographyNumber, objectNumber, category, handleIncrement, handlePass, handleComplete }) => {

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

    const [wordsOn, setWordsOn] = useState(false);

    const wordsOnSelect = () => setWordsOn(!wordsOn);


    return (
        <div style={{backgroundColor: backgroundColorPicker(category), 
                     minHeight: "100vh",
                     display: "flex",
                     alignItems: "center"}}>
                <div className="container">

                {id==="" ? 
                    <div className="container text-center">
                        <h3>You have reached the Great Hat Game</h3> 
                        <h5>Team name registration is required to play the game</h5>
                        <Link to="/">
                            <h6>Go back to register your teams</h6>
                        </Link>
                    </div> :
                <>
                <GameSetUp />
                {category==="" ? 
                <h5>Pick a subject to start the game!</h5> :
                <>
                <h3 style={{textAlign: "center", 
                            marginBottom: "1rem"}}>
                    {"Subject: " + titlePicker(category)}</h3>

                <div className="text-center mb-4">
                    <Button variant="danger"
                            onClick={ wordsOnSelect }>
                    {wordsOn ? "Hide words!" : "Reveal words!"}</Button>
                </div>

                {wordsOn ? 
                <Alert style={{backgroundColor: alertColorPicker(category)}}> 
                    <h3 style={{textAlign: "center", textTransform: "capitalize"}}>
                        {categoryPicker(category, science, celebrities, geography, object, scienceNumber, celebrityNumber, geographyNumber, objectNumber)}
                    </h3> 
                </Alert> 
                : null}
                <CardGroup>
                    <Card>
                        <Card.Body style={{backgroundColor: "lightGrey"}}>
                            <Card.Title>Team 1</Card.Title>
                            <Card.Text className="display-1">{score_1}</Card.Text>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor: alertColorPicker(category)}}>
                            <Button 
                                variant="primary"
                                onClick={() => handleIncrement(1)}>
                                Correct</Button>{' '}
                            <Button
                                variant="danger"
                                onClick={handlePass}>
                                Pass</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body style={{backgroundColor: "lightGrey"}}>
                            <Card.Title>Team 2</Card.Title>
                            <Card.Text className="display-1">{score_2}</Card.Text>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor: alertColorPicker(category)}}>
                            <Button
                                variant="primary"
                                onClick={() => handleIncrement(2)}>Correct</Button>{' '}
                            <Button
                                variant="danger"
                                onClick={handlePass}>Pass</Button>
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
                </> }
        </> }
            </div>
            </div>
    )
}

export default GameRound;