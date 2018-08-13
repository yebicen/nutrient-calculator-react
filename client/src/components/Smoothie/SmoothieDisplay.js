import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./SmoothieCard.css";
// import smoothiecards from "../smoothiecards.json";
import Wrapper from "../Wrapper";

import RecipeList from './RecipeList';
import API from '../../utils/API';



export default class IngredientContainer extends React.Component {

state = {
  dbRecipes: []
}

getRecipes = () => {
  API.getRecipes()
      .then(res => {
          this.setState({
              dbRecipes: res.data
          })
      })
}

componentDidMount() {
  this.getRecipes();
};

  render() {
    return (
      <Wrapper>
        <RecipeList getRecipes={this.getRecipes} dbRecipes={this.state.dbRecipes}/>
      </Wrapper>
    );
  }
}