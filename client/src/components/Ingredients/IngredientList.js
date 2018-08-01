import React from 'react';
import { Table, Button } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

library.add(faFlag)

const IngredientList = props => {
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
                        <th className="ingredient-values">Edit</th>
                        <th className="ingredient-values">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {props.dbIngredients.map(item => (
                        <tr key={item.id}>
                            <td>{item.IngredientName}</td>
                            <td className="ingredient-values">{item.Calories}</td>
                            <td className="ingredient-values">{item.Sugar}</td>
                            <td className="ingredient-values">{item.Fat}</td>
                            <td className="ingredient-values">{item.Protein}</td>
                            <td className="ingredient-values">{item.Carbs}</td>
                            <td className="ingredient-values flag">{item.hasGluten ? <FontAwesomeIcon icon="flag"/> : null}</td>
                            <td className="ingredient-values flag">{item.isNut ? <FontAwesomeIcon icon="flag"/> : null}</td>
                            <td className="ingredient-values"><Button color="primary">Edit</Button></td>
                            <td className="ingredient-values"><Button color="danger" onClick={() => props.toggleDeleteModal(item.IngredientName,item.id)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
}

export default IngredientList;