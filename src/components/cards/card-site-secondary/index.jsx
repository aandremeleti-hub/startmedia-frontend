import './style.css'

export const CardSiteSecondary = ({imagem, titulo, icone_seta, texto, icone_bola, item1, item2, item3, item4 }) => {
    return (
        <section>
            <img src={imagem} alt="" />
            <div>
                <h2>{titulo}</h2>
                <img src={icone_seta} alt="" />
            </div>
            <h3>{texto}</h3>
            <div>
                <div>
                    <img src={icone_bola} alt="" />
                    <p>{item1}</p>
                </div>
                <div>
                    <img src={icone_bola} alt="" />
                    <p>{item2}</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={icone_bola} alt="" />
                    <p>{item3}</p>
                </div>
                <div>
                    <img src={icone_bola} alt="" />
                    <p>{item4}</p>
                </div>
            </div>
        </section>
    )
}