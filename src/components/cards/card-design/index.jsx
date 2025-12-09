import './style.css'

export const CardDesign = ({ imagem, titulo, paragrafo, icone, item1, item2, item3, item4 }) => {
    return (
        <div className='content-card-design'>
            <img src={imagem} alt="" />
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
            <div>
                <div>
                    <img src={icone} alt="" />
                    <p>{item1}</p>
                </div>
                <div>
                    <img src={icone} alt="" />
                    <p>{item2}</p>
                </div>
                <div>
                    <img src={icone} alt="" />
                    <p>{item3}</p>
                </div>
                <div>
                    <img src={icone} alt="" />
                    <p>{item4}</p>
                </div>
            </div>
        </div>
    )
}