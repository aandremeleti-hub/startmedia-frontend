import { CardSiteSecondary } from '../../cards/card-site-secondary'
import './style.css'
import forbes_logo from '../../../assets/images/home/forbes_logo.svg'
import icone_botao_seta from '../../../assets/images/home/icone_botao_seta.svg'
import icon_ball from '../../../assets/images/home/icon_ball.svg'
import sebrae from '../../../assets/images/home/sebrae.svg'
import hostinger from '../../../assets/images/home/hostinger.svg'
import frd_logo from '../../../assets/images/home/frd_logo.svg'


export const SiteCasesSection = () => {
    return (
        <section className='site_secondary_cards_section'>
            <h1>Estudos de caso</h1>
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</h2>
            <div className='container_secondary_cards_site'>
                <CardSiteSecondary
                    imagem={forbes_logo}
                    titulo="MachineLearningProject"
                    icone_seta={icone_botao_seta}
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
                    icone_bola={icon_ball}
                    item1="Lorem Ipsum is simply "
                    item2="Lorem Ipsum is simply "
                    item3="Lorem Ipsum is simply "
                    item4="Lorem Ipsum is simply " />

                <CardSiteSecondary
                    imagem={sebrae}
                    titulo="MachineLearningProject"
                    icone_seta={icone_botao_seta}
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
                    icone_bola={icon_ball}
                    item1="Lorem Ipsum is simply "
                    item2="Lorem Ipsum is simply "
                    item3="Lorem Ipsum is simply "
                    item4="Lorem Ipsum is simply " />
            </div>

            <div className='container_secondary_cards_site'>
                <CardSiteSecondary
                    imagem={hostinger}
                    titulo="MachineLearningProject"
                    icone_seta={icone_botao_seta}
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
                    icone_bola={icon_ball}
                    item1="Lorem Ipsum is simply "
                    item2="Lorem Ipsum is simply "
                    item3="Lorem Ipsum is simply "
                    item4="Lorem Ipsum is simply " />

                <CardSiteSecondary
                    imagem={frd_logo}
                    titulo="MachineLearningProject"
                    icone_seta={icone_botao_seta}
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
                    icone_bola={icon_ball}
                    item1="Lorem Ipsum is simply "
                    item2="Lorem Ipsum is simply "
                    item3="Lorem Ipsum is simply "
                    item4="Lorem Ipsum is simply " />
            </div>

        </section>
    )
}