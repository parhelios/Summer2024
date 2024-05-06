import { useState } from "react";

function ListGroup() {
  let listItems = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return listItems.length === 0 && <p>No items</p>;
  };

  //Event handler

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
