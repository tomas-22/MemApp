import "./App.css";

import { BrowserRouter} from "react-router-dom";
import { MemRouting } from "./MemRouting";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MemRouting />
      </BrowserRouter>
    </div>
  );
}

export default App;
