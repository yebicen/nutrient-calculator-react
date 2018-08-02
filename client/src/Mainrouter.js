
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import { Container } from 'reactstrap';
import NavBar from "./components/NavBar";
import JumbotronComponent from "./components/Jumbotron";

const App = () =>
    <Container>
        <Router>
            <div>
                <JumbotronComponent/>
                <NavBar />
                <Route path="/Ingredients" component={Ingredients} />
            </div>
        </Router>
    </Container>

    

    

export default App;