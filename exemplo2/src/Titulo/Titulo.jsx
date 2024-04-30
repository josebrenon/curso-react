// eslint-disable-next-line react/prop-types
export default function Titulo({nome, paragrafo, cor}){
    
    return (
        <div>
            <h1 style={{color: cor}}>Oi, eu sou {nome ? nome : "Fulano"}</h1>
            {paragrafo ?
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est itaque voluptatum in debitis voluptas expedita error cum, nesciunt officia harum eius. Exercitationem reiciendis cupiditate facere ipsum voluptatem rerum vero!</p>
            : <p></p>
            }
        </div>
    )
}