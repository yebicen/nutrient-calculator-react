
import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import Recipes from "./components/Recipes";
import Admin from "./components/admin";
import { Container } from 'reactstrap';
import NavBar from "./components/NavBar";
import JumbotronComponent from "./components/Jumbotron";
import Smoothie from "./components/Smoothie";
import Login from "./components/login";
import Profile from "./components/profile";
import Imguploader from "./components/uploadimg";
 
const App = () =>
    <Container> 
        <Router>
            <div>
                <JumbotronComponent/>
                <NavBar />
                <Route exact path="/" component={Smoothie} />
                <Route exact path="/Ingredients" component={Ingredients} />
                <Route exact path="/Recipes" component={Recipes} />
                <Route path="/users/admin" component={Admin} />
                <Route path="/users/login" component={Login} />
                <Route path="/users/profile" component={Profile} />
                <Route path="/image" component={Imguploader} /> 
            </div>
        </Router>
    </Container>

export default App;