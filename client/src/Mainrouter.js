
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
import Smoothie from "./components/Smoothie";
import Login from "./components/login";
import Profile from "./components/profile";
import Imguploader from "./components/uploadimg";
import Contact from "./components/contact";

const App = () =>
    <div class="w-screen mt-4">
        <Router history={history}>
            <div>
                <NavBar />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Smoothie} />
                <Route exact path="/ingredients" component={Ingredients} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/recipes" component={Recipes} />
                <Route path="/admin" component={Admin} />      
                <Route path="/profile" component={Profile} />
                <Route path="/image" component={Imguploader} /> 

                </div>
        </Router>
    </div>

export default App;