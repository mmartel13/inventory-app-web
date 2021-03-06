import React, { useEffect } from 'react';

export default function List({ item, setItem }) {
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((res) => res.json())
      .then((res) => setItem(res))
      .catch();
  }, []);

  return (
    <>
      {item.length === 0 ? null : (
        <>
          <h2>List</h2>
          {item.map((item) => {
            return (
              <p key={item.id}>
                <span>{item.item}</span>
                <span>{item.quantity}</span>
              </p>
            );
          })}
        </>
      )}
    </>
  );
}
