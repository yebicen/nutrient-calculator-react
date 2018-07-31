import React from 'react';
import API from '../../utils/API'
import { Table } from 'reactstrap';

export default class IngredientForm extends React.Component {
    state = {
        dbIngredients: []
    }

    getIngredients = () => {
        API.getIngredients()
            .then(res => {
                console.log(res.data);
                this.setState({ dbIngredients: res.data })
            })
    }

    componentDidMount() {
        this.getIngredients();
    };

    render() {
        return (
            <Table striped className="ingredient list">
                <thead>
                    <tr>
                        <th>Ingredient name</th>
                        <th>Calories</th>
                        <th>Sugar</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Gluten-Free?</th>
                        <th>Nut?</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dbIngredients.map(item => (
                        <tr key={item.id}>
                            <td>{item.IngredientName}</td>
                            <td>{item.Calories}</td>
                            <td>{item.Sugar}</td>
                            <td>{item.Fat}</td>
                            <td>{item.Protein}</td>
                            <td>{item.Carbs}</td>
                            <td>{item.hasGluten}</td>
                            <td>{item.isNut}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}