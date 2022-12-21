import memSource from "../memy";
import { useState } from "react";
import { Mem } from "../components/Mem";

export const AddMem = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(memSource);

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addItem() {
    setItems((prevItem) => {
      return { ...prevItem, input };
    });
    setInput("");
  }

  return (
    <div>
      AddMem:
      <p>
        <input
          type="text"
          placeholder="tu wpisz nazwe Mema"
          onChange={handleChange}
          value={input}
        />
      </p>
      <p>
        <input type="text" placeholder="tu wpisz ścieżke Mema" />
      </p>
      <button onClick={addItem}>Dodaj</button>
      <div>
        <ul>
          {items.map((add) => (
            <li> <Mem key={add.key} title={add.title} img={add.img}/> </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
