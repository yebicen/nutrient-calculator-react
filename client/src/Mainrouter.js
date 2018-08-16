
import React from "react";
import { Router, Route, Switch, Link, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
// import createHistory from 'history/createBrowserHistory'
import history from './history';
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

// const history = createHistory();

const Mainrouter = () =>
    <Container> 
        <Router history={history}>
            <div>
                <JumbotronComponent/>
                
                <NavBar />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Smoothie} />
                <Route exact path="/ingredients" component={Ingredients} />
                <Route exact path="/recipes" component={Recipes} />
                <Route path="/admin" component={Admin} />
                
                <Route path="/profile" component={Profile} />
                <Route path="/image" component={Imguploader} /> 

                </div>
        </Router>
    </Container>

export default Mainrouter;