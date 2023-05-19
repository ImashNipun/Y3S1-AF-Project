import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function RecipeRaw(props) {
  
  return (
   
      <tr>
        <td>{props.data.recipe_name}</td>
        <td>{props.data.recipe_type}</td>
        <td>{props.data.main_ingredients.length+props.data.sub_ingredients.length}</td>
        <td>
        <ul>
          {props.data.main_ingredients.map((ingrediants)=>{
            return(
              <li key={ingrediants._id}>{ingrediants.ingredient_name}</li>
            )
          })}
          </ul>
        </td>
        <td>
          <ul>
          {props.data.sub_ingredients.map((ingrediants)=>{
            return(
              <li key={ingrediants._id}>{ingrediants.ingredient_name}</li>
            )
          })}
          </ul>
        </td>
        <td>
          <div className="d-flex justify-content-between">
            <Link className="btn btn-primary" to={`/admin/recipe/single-recipe/${props.data._id}`}>V</Link>
            <Link className="btn btn-primary" to={`/admin/recipe/update-recipe/${props.data._id}`}>U</Link>
            <Button onClick={() => props.handleDelete(props.data._id)}>X</Button>
          </div>
        </td>
      </tr>
  );
}
