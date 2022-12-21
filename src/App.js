import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MemRouting } from "./MemRouting";



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
