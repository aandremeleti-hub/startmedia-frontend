import './style.css'

export const CardMain = ({image, titulo, paragrafo, image_button}) => {
    return (
        <div className="card-main">
            <img src={image} alt="" />
            <h3>{titulo}</h3>
            <p>{paragrafo}</p>
            <button>
                <img src={image_button} alt="ícone de seta" loading="lazy" />
                Saiba mais
            </button>
        </div>
    )
}