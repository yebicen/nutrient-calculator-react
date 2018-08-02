import React from 'react';
import { Table, Button } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from './DeleteModal';

import API from '../../utils/API';

library.add(faFlag)

export default class IngredientList extends React.Component {

    state = {
        //for ingredient deletion
        deleteModal: false,
        deleteIngredientName: "",
        deleteIngredientId: "",

        //for ingredient editing
        editModal: false,
        editIngredientName: "",
        editIngredientId: ""
    }

    // getIngredients = () => {
    //     API.getIngredients()
    //         .then(res => {
    //             console.log(res.data);
    //             this.setState({ dbIngredients: res.data })
    //         })
    // }

    // componentDidMount() {
    //     this.getIngredients();
    // };

    toggleDeleteModal = (deleteIngredientName, deleteIngredientId) => {
        this.setState({
            deleteModal: !this.state.deleteModal,
            deleteIngredientName: deleteIngredientName,
            deleteIngredientId: deleteIngredientId
        });
    }

    render() {
        return (
            <div className="ingredientListWrap">
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
                    {this.props.dbIngredients.map(item => (
                        <tr key={item.id}>
                            <td>{item.IngredientName}</td>
                            <td className="ingredient-values">{item.Calories}</td>
                            <td className="ingredient-values">{item.Sugar}</td>
                            <td className="ingredient-values">{item.Fat}</td>
                            <td className="ingredient-values">{item.Protein}</td>
                            <td className="ingredient-values">{item.Carbs}</td>
                            <td className="ingredient-values flag">{item.hasGluten ? <FontAwesomeIcon icon="flag" /> : null}</td>
                            <td className="ingredient-values flag">{item.isNut ? <FontAwesomeIcon icon="flag" /> : null}</td>
                            <td className="ingredient-values"><Button color="primary">Edit</Button></td>
                            <td className="ingredient-values"><Button color="danger" onClick={() => this.toggleDeleteModal(item.IngredientName, item.id)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <DeleteModal 
            toggle = {this.toggleDeleteModal}
            modal = {this.state.deleteModal}
            deleteIngredientName={this.state.deleteIngredientName}
            deleteIngredientId={this.state.deleteIngredientId}
            getIngredients={this.props.getIngredients}
            />
            </div>
        )
    }
}