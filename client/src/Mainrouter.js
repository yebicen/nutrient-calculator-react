
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
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

const Mainrouter = () =>
    <div class="w-screen mt-4">
        <Router>
            <div>
                <NavBar />
                <Route exact path="/" component={Smoothie} />
                <Route exact path="/ingredients" component={Ingredients} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/recipes" component={Recipes} />
                <Route path="/users/admin" component={Admin} />
                <Route path="/users/login" component={Login} />
                <Route path="/users/profile" component={Profile} />
                <Route path="/image" component={Imguploader} />
            </div>
        </Router>
    </div>

export default Mainrouter;