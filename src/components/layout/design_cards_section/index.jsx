import './style.css'
import { CardDesign } from '../../cards/card-design'
import puzzle_icon_design_card from '../../../assets/images/home/puzzle_icon_design_card.svg'
import icon_ball from '../../../assets/images/home/icon_ball.svg'
import picture_icon_design_card from '../../../assets/images/home/picture_icon_design_card.svg'
import threed_icon_design_card from '../../../assets/images/home/3d_icon_design_card.svg'
import calender_icon_design_card from '../../../assets/images/home/calender_icon_design_card.svg'

export const DesignCardsSection = () => {
    return (
        <section className='design_cards_section'>
            <h1>O que você ganha?</h1>
            <div>
                <div className='container-cards-design'>
                    <CardDesign
                        imagem={puzzle_icon_design_card}
                        titulo="Estratégia"
                        paragrafo="Cutting-edge blockchain solutions and DeFi protocol development."
                        icone={icon_ball}
                        item1="DeFi protocols"
                        item2="Token systems"
                        item3="Smart contracts"
                        item4="Blockchain analytics"
                    />
                    <CardDesign
                        imagem={picture_icon_design_card}
                        titulo="Criação de posts e carrosséis"
                        paragrafo="Cutting-edge blockchain solutions and DeFi protocol development."
                        icone={icon_ball}
                        item1="DeFi protocols"
                        item2="Token systems"
                        item3="Smart contracts"
                        item4="Blockchain analytics" />
                </div>
                <div className='container-cards-design'>
                    <CardDesign
                        imagem={threed_icon_design_card}
                        titulo=" Vídeos e animação"
                        paragrafo="Cutting-edge blockchain solutions and DeFi protocol development."
                        icone={icon_ball}
                        item1="DeFi protocols"
                        item2="Token systems"
                        item3="Smart contracts"
                        item4="Blockchain analytics"
                    />

                    <CardDesign
                        imagem={calender_icon_design_card}
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