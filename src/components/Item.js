import React, { useState } from "react";

function Item({ name, category }) {
  const [itemIn, setItemIn] = useState("")

  function addItem (e) {
    e.preventDefault()
    setItemIn("in-cart")

  }

  return (
    <li className={itemIn}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
