import './style.css'

export const CardIaPrimary = ({imagem, titulo, texto}) => {
    return (
        <div className="content-card-ia-primary">
            <img src={imagem} alt="" />
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}