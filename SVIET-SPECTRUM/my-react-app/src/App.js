import React from 'react'
import './App.css';
// import {Container, Row, Col} from 'bootstrap/dist/js/bootstrap.js';
import {Switch, Route} from "react-router-dom";
import Header from './My Components/Header';
import Home from './My Components/Home.js';
import Login from './My Components/Login.js';
import Signup from './My Components/Signup';



 function App() {
  return (
    // <Container>
    //   <Row>
    //     <Col>
          <Switch>
            <Route exact path="/header" component={Header} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
    //     </Col>
    //   </Row>
    // </Container>
    
  )
}
export default App;

