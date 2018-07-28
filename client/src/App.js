import React from "react";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import Nav from "./components/Nav";

const App = () => (
  <div>
    <Nav />
    <Recipes />
    <Ingredients />
  </div>
);

export default App;
