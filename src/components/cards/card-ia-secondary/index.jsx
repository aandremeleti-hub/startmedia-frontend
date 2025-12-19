import './style.css'

export const CardIaSecondary = ({imagem, titulo, texto }) => {
    return (
        <div>
            <img src={imagem} alt="" />
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}