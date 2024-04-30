export default function Titulo(){
    //let nome = "Brenon";
    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    return (
        <div>
            <h1>Oi, eu sou um {soma}</h1>
            <img width={100} src={urlImg} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est itaque voluptatum in debitis voluptas expedita error cum, nesciunt officia harum eius. Exercitationem reiciendis cupiditate facere ipsum voluptatem rerum vero!</p>
        </div>
    )
}