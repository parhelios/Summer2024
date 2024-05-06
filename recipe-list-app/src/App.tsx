import ListGroup from "./components/ListGroup";

function App() {
  let listItems = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div>
      <ListGroup listItems={listItems} heading={"Cities"} />
    </div>
  );
}

export default App;
