import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  let listItems = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        listItems={listItems}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <b>Alert:</b> <span>This is a primary alert—check it out!</span>
      </Alert>
    </div>
  );
}

export default App;
