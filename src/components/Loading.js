import React, { Component } from "react";

import Spinner from 'react-bootstrap/Spinner'

class Loading extends Component {
  render() {
    const { children, loaded } = this.props;
    return loaded ? children : (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
  }
}

export default Loading;