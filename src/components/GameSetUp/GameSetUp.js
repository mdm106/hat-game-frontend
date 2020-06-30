import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class GameSetUp extends Component {
    constructor(props) {
        super(props);

        let { timerTotal } = props;

        this.state = {
            timerTotal,
            category: "",
        };

        this.handleSeconds = this.handleSeconds.bind(this);

        this.handleCategory = this.handleCategory.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSeconds(e) {
        this.setState({ timerTotal: e.currentTarget.value});
    }

    handleCategory(e) {
        this.setState({ category: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleGameSetUp({ ...this.state });
    }

    render() {
        let { timerTotal, category } = this.state;
        return (
            <>
                <div className="container">
                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Group controlId="formSeconds">
                            <Form.Label>Round time (between 30 and 60 seconds, default is 45 seconds)</Form.Label>
                            <Form.Control type="number"
                                          onChange={ this.handleSeconds }
                                          value={ timerTotal }
                                          min={30}
                                          max={60} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select" value={category} onChange={this.handleCategory}>
                                <option value={""}></option>
                                <option value={"1"}>Science</option>
                                <option value={"2"}>Celebrities</option>
                                <option value={"3"}>Geography</option>
                                <option value={"4"}>Object</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={category === ""}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        );
    }
}

export default GameSetUp;