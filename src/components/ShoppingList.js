import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterInput, setFilterInput] = useState('')

  // States and Function to pass to ItemForm
  const [inputState, setInputState] = useState('')
  const [categoryState, setCategoryState] = useState('Produce')

  function onItemFormSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: inputState,
      category: categoryState
    };
    const newItemArray = [...items, newItem]
    setItems(newItemArray)
    setInputState('')
    setCategoryState('Produce')
  }

  function handleSearch(e) {
    setFilterInput(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchToDisplay = items.filter((item) => {
    if (filterInput === '') return true;

    return filterInput === item.category 
  })

  return (
    <div className="ShoppingList">
      <ItemForm 
        inputState = {inputState}
        setInputState = {setInputState}
        categoryState = {categoryState}
        setCategoryState = {setCategoryState}
        onItemFormSubmit = {onItemFormSubmit}
       />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        handleSearch = {handleSearch}
        filterInput = {filterInput}
        />
      <ul className="Items">
        {searchToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
