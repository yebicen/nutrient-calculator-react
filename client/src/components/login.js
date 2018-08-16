import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import UserAPI from "../utils/UserAPI";
import history from '../history';

console.log(history.location);
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameLgIn: "",
            passwordLgIn: ""
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
    }


    handleLoginChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }

    handleLoginSubmit = event => {
        event.preventDefault();
        const login = {
            username: this.state.usernameLgIn,
            password: this.state.passwordLgIn
        }
        UserAPI.loginUser(login)
            .then(res => {
                console.log("logged In");
            })
            .catch(err => console.log(err));
        // history.push('/');
        this.setState({
            usernameLgIn: "",
            passwordLgIn: ""
        })
        window.location.reload();

    }

    render() {

        return (
            
            <Container>
                
                <h4>Log in to manage ingredients and recipes</h4>
                <Form>
                    <Row className="loginForm">
                        <Col md="3">
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label className="mr-sm-2">Userame: </Label>
                                <Input id="usernameLgIn" name="usernameLgIn" value={this.state.usernameLgIn} onChange={this.handleLoginChange} />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label className="mr-sm-2">Password: </Label>
                                <Input id="passwordLgIn" name="passwordLgIn" value={this.state.passwordLgIn} onChange={this.handleLoginChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="loginForm">
                        <Col>
                        <Button color="primary" onClick={this.handleLoginSubmit} >Submit </Button>
                        </Col>
                    </Row>
                </Form>

            </Container>

        );


    }

 
}