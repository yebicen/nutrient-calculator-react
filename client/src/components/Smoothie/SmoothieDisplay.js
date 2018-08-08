import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./SmoothieCard.css";
import smoothiecards from "../smoothiecards.json";
import Wrapper from "../Wrapper";

export default class SmoothieDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      smoothiecards,
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
  
          {this.state.smoothiecards.length > 0 ? this.state.smoothiecards.map(data => (
            <div className="card">
              <div className="img-container">
                <img alt={data.RecipeName} src={data.RecipeImage} />
              </div>
              <div className="img-container">
                <h4>
                  <strong>{data.RecipeName}</strong>
                </h4>
                <p>
                  {data.Description}
                </p>
              </div>
              <div className="content">

                <div>
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
                              <strong>Calories:</strong> {data.SMTotalCalories}
                            </li>
                            <li>
                              <strong>Total Protein (oz):</strong> {data.SMTotalProtein}
                            </li>
                            <li>
                              <strong>Sugar(oz):</strong> {data.SMTotalSugar}
                            </li>
                            <li>
                              <strong>Total Carbs (oz):</strong> {data.SMTotalCarbs}
                            </li>
                            <li>
                              <strong>Total Fat (oz):</strong> {data.SMTotalFat}
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
                              <strong>Calories:</strong> {data.MDTotalCalories}
                            </li>
                            <li>
                              <strong>Total Protein (oz):</strong> {data.MDTotalProtein}
                            </li>
                            <li>
                              <strong>Sugar(oz):</strong> {data.MDTotalSugar}
                            </li>
                            <li>
                              <strong>Total Carbs (oz):</strong> {data.MDTotalCarbs}
                            </li>
                            <li>
                              <strong>Total Fat (oz):</strong> {data.MDTotalFat}
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
                              <strong>Calories:</strong> {data.LGTotalCalories}
                            </li>
                            <li>
                              <strong>Total Protein (oz):</strong> {data.LGTotalProtein}
                            </li>
                            <li>
                              <strong>Sugar(oz):</strong> {data.LGTotalSugar}
                            </li>
                            <li>
                              <strong>Total Carbs (oz):</strong> {data.LGTotalCarbs}
                            </li>
                            <li>
                              <strong>Total Fat (oz):</strong> {data.LGTotalFat}
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </div>

            </div>
          ))
            : ""
          }
   
      </Wrapper>
    );
  }
}