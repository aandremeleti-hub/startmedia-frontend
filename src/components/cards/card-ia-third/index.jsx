import './style.css'

export const CardIaThird = ({linha, aspas, titulo, nome, cargo}) => {
    return (
        <div>
            <div>
                <img src={linha} alt="" />
                <img src={aspas} alt="" />
                <img src={linha} alt="" />
            </div>
            <h1>{titulo}</h1>
            <div>
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
            </div>
        </div>
    )
}