import React from 'react';
import { Container, Table } from 'reactstrap';
import API from '../../utils/API';


export default class RecipeContainer extends React.Component {
    state = {
        dbRecipes: {}
    }

    getRecipes = () => {
        API.getRecipes()
            .then(res => {
                this.setState({
                    dbRecipes: res.data
                })
                console.log(JSON.stringify(this.state.dbRecipes,null,2))
            })


    }

    componentDidMount() {
        this.getRecipes();
    };

    render() {
        return (
            <Table striped className="ingredient list">
                <thead>
                    <tr>
                        <th>List of Recipes </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>

        );
    }
}