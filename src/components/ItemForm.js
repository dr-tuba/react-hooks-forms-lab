import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from 'react';

function ItemForm(props) {
  function handleFormChange(e) {
    props.setInputState(e.target.value)
  }

  function handleCategoryChange(e) {
    props.setCategoryState(e.target.value)
  }

  return (
    <form onSubmit={props.onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input value={props.inputState} onChange={handleFormChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={props.categoryState} onChange={handleCategoryChange}name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
