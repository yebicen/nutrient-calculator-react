
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import { Container } from 'reactstrap';


const App = () =>
    <Container>
        <Router>
            <div>
                <Route path="/Ingredients" component={Ingredients} />
            </div>
        </Router>
    </Container>

export default App;