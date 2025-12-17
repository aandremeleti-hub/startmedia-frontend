import './style.css'
import {CardSitePrimary} from '../../cards/card-site-primary'
import star_icon_site_primary_card from '../../../assets/images/home/star_icon_site_primary_card.svg'
import icon_ball from '../../../assets/images/home/icon_ball.svg'
import wifi_icon_site_primary_card from '../../../assets/images/home/wifi_icon_site_primary_card.svg'
import link_icon_site_primary_card from '../../../assets/images/home/link_icon_site_primary_card.svg'
import medal_icon_site_primary_card from '../../../assets/images/home/medal_icon_site_primary_card.svg'

export const SiteCardsSection = () => {
    return(
        <section className='site_primary_cards_section'>
                    <h1>O que você ganha?</h1>
                    <div>
                        <div className='container_primary_cards_site'>
                            <CardSitePrimary
                                imagem={star_icon_site_primary_card}
                                titulo="Estratégia"
                                paragrafo="Cutting-edge blockchain solutions and DeFi protocol development."
                                icone={icon_ball}
                                item1="DeFi protocols"
                                item2="Token systems"
                                item3="Smart contracts"
                                item4="Blockchain analytics"
                            />
                            <CardSitePrimary
                                imagem={wifi_icon_site_primary_card}
                                titulo="Criação de posts e carrosséis"
                                paragrafo="Cutting-edge blockchain solutions and DeFi protocol development."
                                icone={icon_ball}
                                item1="DeFi protocols"
                                item2="Token systems"
                                item3="Smart contracts"
                                item4="Blockchain analytics" />
                        </div>
                        <div className='container_primary_cards_site'>
                            <CardSitePrimary
                                imagem={link_icon_site_primary_card}
                                titulo=" Vídeos e animação"
                                paragrafo="Cutting-edge blockchain solutions and DeFi protocol development."
                                icone={icon_ball}
                                item1="DeFi protocols"
                                item2="Token systems"
                                item3="Smart contracts"
                                item4="Blockchain analytics"
                            />
        
                            <CardSitePrimary
                                imagem={medal_icon_site_primary_card}
                                titulo="Stories"
                                paragrafo="Cutting-edge blockchain solutions and DeFi protocol development."
                                icone={icon_ball}
                                item1="DeFi protocols"
                                item2="Token systems"
                                item3="Smart contracts"
                                item4="Blockchain analytics" />
                        </div>
                    </div>
                </section>
    )
}