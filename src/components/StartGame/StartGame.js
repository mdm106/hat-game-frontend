import React, { Component } from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

    render() {
        let { team_1, team_2 } = this.state;
        return (
            <>
                <Jumbotron>
                    <h1>The Great Hat Game</h1>
                    <p>Enter team details to start the game</p>
                </Jumbotron>
                <div className="container">
                    <Form onSubmit={ this.handleSubmit }>
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        );
    }
}

export default StartGame;