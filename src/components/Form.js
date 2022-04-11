import React, { useState } from "react";

export default function Form() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addItem = (e) => {
    e.preventDefault();
    if (!item || quantity < 1) {
      return;
    } else
      fetch("http://localhost:3000/add-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: item,
          quantity: quantity,
        }),
      }).then((res) => res.json());
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
            value={item}
            placeholder="Enter item name"
            onChange={(e) => setItem(e.target.value)}
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
