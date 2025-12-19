import './style.css'

export const CardIaSecondary = ({imagem, titulo, texto }) => {
    return (
        <div className='content-card-ia-secondary'>
            <img src={imagem} alt="" />
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}