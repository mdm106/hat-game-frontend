import React, { Component } from "react";
import { Link } from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class StartGame extends Component {
    constructor(props) {
        super(props);

        let { team_1, team_2 } = props;

        this.state = {
            team_1,
            team_2,
        };

        this.handleTeam1 = this.handleTeam1.bind(this);

        this.handleTeam2 = this.handleTeam2.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleResetClicked = this.handleResetClicked.bind(this);
    }

    handleTeam1(e) {
        this.setState({ team_1: e.currentTarget.value});
    }

    handleTeam2(e) {
        this.setState({ team_2: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleStartGame({ ...this.state });
    }

    handleResetClicked() {
        this.setState({ team_1: "", team_2: ""});
        this.props.handleReset();
    }

    render() {
        let { team_1, team_2 } = this.state;
        return (
            <div style={{
                backgroundColor: "#84BCDA",
                minHeight: "100vh",
                overflowY: "hidden",
            }}>
                <div className="container text-right">
                    <Link to ="/game-history">
                        <button className="btn btn-info m-1">
                            View previous game results
                        </button>
                    </Link>
                </div>
                <div className="container">
                    <Jumbotron
                        className="text-center"
                        style={{ backgroundColor: "#067BC2",
                                color: "white"}}>
                        <h1>The Great Hat Game</h1>
                        <h3>Enter team names to start the game!</h3>
                    </Jumbotron>
                
                    <Form 
                        onSubmit={ this.handleSubmit }
                        style={{ fontSize: "1.3rem"}}>
                        <Form.Group controlId="formBasicTeamOne">
                            <Form.Label>Team 1 Name:</Form.Label>
                            <Form.Control type="text"
                                          onChange={ this.handleTeam1 }
                                          value={ team_1 } />
                        </Form.Group>
                        <Form.Group controlId="formBasicTeamOne">
                            <Form.Label>Team 2 Name:</Form.Label>
                            <Form.Control type="text"
                                          onChange={ this.handleTeam2 }
                                          value={ team_2 } />
                        </Form.Group>
                        <Button 
                            variant="primary"
                            type="submit"
                            disabled={ team_1 === "" || team_2 === "" || team_1 === team_2 }
                            style={{ fontSize: "1.3rem",
                                     backgroundColor: "#067BC2"}}>
                            Submit
                        </Button>
                        { team_1 !== "" && team_1 === team_2 ?
                        <Alert variant="danger" className="mt-3">
                            Duplicate team names, please amend
                        </Alert> : null }
                    </Form>
                    <Button 
                            className="mt-2"
                            variant="danger"
                            type="click"
                            style={{ fontSize: "1.3rem" }}
                            onClick= { this.handleResetClicked }>
                            Reset
                    </Button>
                </div>
            </div>
        );
    }
}

export default StartGame;