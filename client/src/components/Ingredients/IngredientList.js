import React from 'react';
import API from '../../utils/API'
import { Table } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

library.add(faFlag)

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
                        <th className="ingredient-values">Calories</th>
                        <th className="ingredient-values">Sugar</th>
                        <th className="ingredient-values">Fat</th>
                        <th className="ingredient-values">Protein</th>
                        <th className="ingredient-values">Carbs</th>
                        <th className="ingredient-values">Has Gluten?</th>
                        <th className="ingredient-values">Is a Nut?</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dbIngredients.map(item => (
                        <tr key={item.id}>
                            <td>{item.IngredientName}</td>
                            <td className="ingredient-values">{item.Calories}</td>
                            <td className="ingredient-values">{item.Sugar}</td>
                            <td className="ingredient-values">{item.Fat}</td>
                            <td className="ingredient-values">{item.Protein}</td>
                            <td className="ingredient-values">{item.Carbs}</td>
                            <td className="ingredient-values flag">{item.hasGluten ? <FontAwesomeIcon icon="flag"/> : null}</td>
                            <td className="ingredient-values flag">{item.isNut ? <FontAwesomeIcon icon="flag"/> : null}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}