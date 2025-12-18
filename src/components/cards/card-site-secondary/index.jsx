import './style.css'

export const CardSiteSecondary = ({ imagem, titulo, icone_seta, texto, icone_bola, item1, item2, item3, item4 }) => {
    return (
        <section className='content-secondary-card-site'>
            <img className='secondary-card-image' src={imagem} alt="" />
            <div className='box-title-secondary-card-site'>
                <h2 className='title-secondary-card-site'>{titulo}</h2>
                <img className='image-title-secondary-card-site' src={icone_seta} alt="" />
            </div>
            <h3 className='text-secondary-card-site'>{texto}</h3>
            <div className='box-secondary-card-site-items'>
                <div className='secondary-card-site-items'>
                    <div className='card-site-left-items'>
                        <img src={icone_bola} alt="" />
                        <p>{item1}</p>
                    </div>
                    <div className='card-site-right-items'>
                        <img src={icone_bola} alt="" />
                        <p>{item2}</p>
                    </div>
                </div>
                <div className='secondary-card-site-items'>
                    <div className='card-site-left-items'>
                        <img src={icone_bola} alt="" />
                        <p>{item3}</p>
                    </div>
                    <div className='card-site-right-items'>
                        <img src={icone_bola} alt="" />
                        <p>{item4}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}