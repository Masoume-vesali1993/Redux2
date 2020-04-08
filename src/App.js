import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import SubTotal from './components/SubTotal/SubTotal';
import './App.css';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      total:100
    }
  }



render() {
  return (
    <div className="container">
      <Row className="purchase-card">
        <SubTotal price={this.state.total.toFixed(2)} />
      </Row>
    </div>
     );
    }
   }
  


export default App;
