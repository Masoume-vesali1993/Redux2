import React, { Component } from './node_modules/react';
import {Row, Col} from './node_modules/react-bootstrap';

export default class SubTotal extends Component {
    render () {
        return(
            <Row className="show-grid">
                <Col md={6}>SubTotal</Col>
                <Col md={6}>{`$${this.props.price}`}</Col>
            </Row>
        )
    }
}