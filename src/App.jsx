import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <Form />
    </>
  );
}

export default App;
