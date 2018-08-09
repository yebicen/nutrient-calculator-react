import React from 'react';
import { Container, Table } from 'reactstrap';
import API from '../../utils/API';


export default class RecipeContainer extends React.Component {
    state = {
        dbRecipes: [],
        dbRecipeTotals: []
    }

    getRecipes = () => {
        API.getRecipes()
            .then(res => {
                this.setState({
                    dbRecipes: res.data
                })
                console.log('dbRecipes: ' + JSON.stringify(this.state.dbRecipes,null,2))
                // for (let i = 0; i<this.state.dbRecipes.length; i++) {
                // if (this.state.dbRecipes[i].Size==='sm') {
                //     console.log('HOLA')
                //     console.log(JSON.stringify(this.state.dbRecipes[i],null,2))
                // }
                // }
            })

        API.getRecipeTotals()
            .then(res => {
                this.setState({
                    dbRecipeTotals: res.data
                })
            })


    }

    componentDidMount() {
        this.getRecipes();
    };

    render() {
        return (
            //get ingredient names from dbIngredients
            //get recipe names, desc, image from dbRecipes
            //get sizes and amounts from dbRecipeAmounts
            //get totals from dbRecipeTotals
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