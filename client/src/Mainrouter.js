
import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import Admin from "./components/admin";
import { Container } from 'reactstrap';


const App = () =>
    <Container>
        <Router>
            <div>
                <Route path="/Ingredients" component={Ingredients} />
                <Route path="/users/admin" component={Admin} />
            </div>
        </Router>
    </Container>

export default App;