import React from 'react';
import { Container, Table } from 'reactstrap';
import API from '../../utils/API';


export default class RecipeContainer extends React.Component {
    state = {
        dbIngredients: [],
        dbRecipes: [],
        dbRecipeAmounts: []
    }

    getRecipes = () => {
        API.getRecipes()
            .then(res => {
                this.setState({
                    dbIngredients: res.data[0],
                    dbRecipes: res.data[1],
                    dbRecipeAmounts: res.data[2]
                })
            })
            
    }

    componentDidMount() {
        this.getRecipes();
    };

    render() {
        return (
            <Container>
                <Table striped className="ingredient list">
                    <thead>
                        <tr>
                            <th>Recipes List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dbRecipes.map(item => (
                            <tr key={item.id}>
                                <td>{item.RecipeName}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}