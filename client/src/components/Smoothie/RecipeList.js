import React from 'react';
import API from '../../utils/API';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Container, Table, Row, Col, Button } from 'reactstrap';

import classnames from 'classnames';
import "./SmoothieCard.css";
import Wrapper from "../Wrapper";
// import smoothiecards from "../smoothiecards.json";
// import Wrapper from "../Wrapper";

export default class SmoothieDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            prepopulateForm: {},
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Wrapper>
                {this.props.dbRecipes.map(recipe => (
                    <div key={recipe.RecipeInfo[0].id} className="singleRecipeWrapper">
                        <div className="card">
                            <div className="img-container">
                                <img src={recipe.RecipeInfo[0].RecipeImage} className="img-fluid" />
                            </div>
                            <div className="img-container">
                                <h4><strong>{recipe.RecipeInfo[0].RecipeName}</strong></h4>
                                <p><strong>{recipe.RecipeInfo[0].RecipeDescription}</strong></p>
                            </div>

                            <div className="content">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            SM
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            MD
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '3' })}
                                            onClick={() => { this.toggle('3'); }}
                                        >
                                            LG
                                     </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col sm="12">
                                                <ul>
                                                    <li>
                                                        <strong>Total Calories:</strong>
                                                        {recipe.sizes.small.nutritionTotals.Calories}
                                                    </li>
                                                    <li>
                                                        <strong>Total Carbs:</strong>
                                                        {recipe.sizes.small.nutritionTotals.Carbs}
                                                    </li>
                                                    <li>
                                                        <strong>Total Sugar:</strong>
                                                        {recipe.sizes.small.nutritionTotals.Sugar}
                                                    </li>
                                                    <li>
                                                        <strong>Total Fat:</strong>
                                                        {recipe.sizes.small.nutritionTotals.Fat}
                                                    </li>
                                                    <li>
                                                        <strong>Total Protein:</strong>
                                                        {recipe.sizes.small.nutritionTotals.Protein}
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="2">
                                        <Row>
                                            <Col sm="12">
                                                <ul>
                                                    <li>
                                                        <strong>Total Calories:</strong>
                                                        {recipe.sizes.medium.nutritionTotals.Calories}
                                                    </li>
                                                    <li>
                                                        <strong>Total Carbs:</strong>
                                                        {recipe.sizes.medium.nutritionTotals.Carbs}
                                                    </li>
                                                    <li>
                                                        <strong>Total Sugar:</strong>
                                                        {recipe.sizes.medium.nutritionTotals.Sugar}
                                                    </li>
                                                    <li>
                                                        <strong>Total Fat:</strong>
                                                        {recipe.sizes.medium.nutritionTotals.Fat}
                                                    </li>
                                                    <li>
                                                        <strong>Total Protein:</strong>
                                                        {recipe.sizes.medium.nutritionTotals.Protein}
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="3">
                                        <Row>
                                            <Col sm="12">
                                                <ul>
                                                    <li>
                                                        <strong>Total Calories:</strong>
                                                        {recipe.sizes.large.nutritionTotals.Calories}
                                                    </li>
                                                    <li>
                                                        <strong>Total Carbs:</strong>
                                                        {recipe.sizes.large.nutritionTotals.Carbs}
                                                    </li>
                                                    <li>
                                                        <strong>Total Sugar:</strong>
                                                        {recipe.sizes.large.nutritionTotals.Sugar}
                                                    </li>
                                                    <li>
                                                        <strong>Total Fat:</strong>
                                                        {recipe.sizes.large.nutritionTotals.Fat}
                                                    </li>
                                                    <li>
                                                        <strong>Total Protein:</strong>
                                                        {recipe.sizes.large.nutritionTotals.Protein}
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </div>
                ))}
            </Wrapper>
        );
    }
}