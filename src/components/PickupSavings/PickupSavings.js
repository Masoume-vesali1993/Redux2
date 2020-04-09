import React, { Component } from 'react';

import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    PickupSavings: {
    textDecoration: 'none'
    },
    totalSaving:{
        color:'red', 
        fontWeight: 8000
    }
};


export default class PickupSavings extends Component {
    render() {
        const tooltip = (
            <Tooltip id="Tooltip">
                <p>Picking up your order in the store</p>
            </Tooltip>
        );
        
        return(
            <Row className="show-grid row">
                <Col md={6}>
                    <OverlayTrigger placement="bottom">
                        <div style={styles.PickupSavings}>pickup saving</div>
                    </OverlayTrigger>
                </Col>

                <Col style={styles.totalSaving} md={6}>
                    {`$${this.props.price}`}
                </Col>

            </Row>
        )
    }
}