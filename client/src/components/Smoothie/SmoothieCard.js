import React from "react";
import "./SmoothieCard.css";
  
const SmoothieCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.RecipeName} src={props.RecipeImage} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.RecipeName}</strong> 
        </li>
        <li>
          {props.Description}
        </li>
        <li>
          <strong>Calories:</strong> {props.TotalCalories}
        </li>
        <li>
          <strong>Total Protein (oz):</strong> {props.TotalProtein}
        </li>
        <li>
          <strong>Sugar(oz):</strong> {props.TotalSugar}
        </li>
        <li>
          <strong>Total Carbs (oz):</strong> {props.TotalCarbs}
        </li>
        <li>
          <strong>Total Fat (oz):</strong> {props.TotalFat}
        </li>

      </ul>
    </div>
    {/* <span onClick={() => props.removeSmoothieCard(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default SmoothieCard;

