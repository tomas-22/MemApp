import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MemRouting } from "./MemRouting";
import { Mem } from "./components/Mem";
import { Vote } from "./components/Vote";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <MemRouting />
      </BrowserRouter>
      {/* <Mem /> */}
    </div>
  );
}

export default App;
