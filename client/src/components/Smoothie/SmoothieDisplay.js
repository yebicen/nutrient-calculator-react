import React, { Component } from "react";
import SmoothieCard from "./SmoothieCard";
import smoothiecards from "../smoothiecards.json";
// import { Container } from 'reactstrap';
import Wrapper from "../Wrapper";

class SmoothieDisplay extends Component {
  state = {
    smoothiecards
  };

  removeSmoothieCard = id => {
  
    const smoothiecards = this.state.smoothiecards.filter(smoothiecard => smoothiecard.id !== id);
    this.setState({ smoothiecards });
  };

  render() {
    return (
      <Wrapper>
        {this.state.smoothiecards.map(smoothiecard => (
          <SmoothieCard
          removeSmoothieCard={this.removeSmoothieCard}
            id={smoothiecard.id}
            key={smoothiecard.id}
            RecipeName={smoothiecard.RecipeName}
            RecipeImage={smoothiecard.RecipeImage}
            Description={smoothiecard.Description}
            TotalCalories={smoothiecard.TotalCalories}
            TotalProtein={smoothiecard.TotalProtein}
            TotalSugar={smoothiecard.TotalSugar}
            TotalCarbs={smoothiecard.TotalCarbs}
            TotalFat={smoothiecard.TotalFat}
          />
        ))}
      </Wrapper>
    );
  }
}


export default SmoothieDisplay;
