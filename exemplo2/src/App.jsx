import Titulo from "./Titulo/Titulo"

export default function App(){
  return (
    <div>
      <Titulo nome="Brenon" 
              paragrafo={true}
              cor="red" />
      <Titulo cor="orange" />
      <Titulo cor="purple" />
      <Titulo cor="blue" />
    </div>
  )
}