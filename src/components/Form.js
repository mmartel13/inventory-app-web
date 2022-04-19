import React, { useState } from "react";

export default function Form({ setItem }) {
  const [itemName, setItemName] = useState("")
  const [quantity, setQuantity] = useState(1);

  const addItem = (e) => {
    e.preventDefault();
    if (!itemName || quantity < 1) {
      return;
    } else
      fetch("http://localhost:3000/add-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: itemName,
          quantity: quantity,
        }),
      }).then((res) => res.json())
      .then(
        fetch('http://localhost:3000/items')
       .then(res => res.json())
       .then(data => setItem(data)))
  };

  return (
    <>
      <h2>Enter items here</h2>
      <form>
        <label>
          {" "}
          Item
          <input
            type="text"
            value={itemName}
            placeholder="Enter item name"
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Quantity
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button onClick={addItem}>Add Item</button>
      </form>
    </>
  );
}
