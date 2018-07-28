import React from "react";

// RecipeList renders a bootstrap list item
export const IngredientList = props => (
  <ul className="list-group">{props.children}</ul>
);
