/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from "react"
export default function Titulo({cor}){
    const [texto, setTexto] = useState("Título inicial");
    const [inputText, setinputText] = useState("");

    function clicou(){
        setTexto(inputText);
    }
    
    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <input value={inputText} onChange={(e)=>{setinputText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    )
}