import memSource from "../memy"

export const AddMem = () => {
    return <div>
        AddMem:
        <p>
       <input type="text" placeholder="tu wpisz nazwe Mema" />     
        </p>
    
    <p>
    <input type="text" placeholder="tu wpisz ścieżke Mema" /> 
    </p>
    <button>Dodaj</button>

    </div>
}