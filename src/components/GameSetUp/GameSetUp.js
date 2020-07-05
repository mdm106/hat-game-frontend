import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class GameSetUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "",
        };

        this.handleCategory = this.handleCategory.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
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
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select subject:</Form.Label>
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