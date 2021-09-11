import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientList list={ingredients} />
      <Instruction title="Cooking Instructions" steps={steps} />
    </section>
  );
}

export default Recipe;
