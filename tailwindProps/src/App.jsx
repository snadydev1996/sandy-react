import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const myobj ={
    name:"sandeep",
    age:25
  }
  let newArray=[1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test</h1>
    <Card username="sandy or code " btntext="click me" />
    <Card username="sandeep or code " btntext="hit me" />
    <Card username="destiny or code " btntext="submit me" />
    </>
  );
}

export default App;
