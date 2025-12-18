import { CardSiteSecondary } from '../../cards/card-site-secondary'
import './style.css'
import forbes_logo from '../../../assets/images/home/forbes_logo.svg'
import icone_botao_seta from '../../../assets/images/home/icone_botao_seta.svg'
import icon_ball from '../../../assets/images/home/icon_ball.svg'

export const SiteCasesSection = () => {
    return(
        <section>
            <CardSiteSecondary
            imagem={forbes_logo}
            titulo="MachineLearningProject"
            icone_seta={icone_botao_seta}
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
            icone_bola={icon_ball}
            item1="Lorem Ipsum is simply "
            item2="Lorem Ipsum is simply "
            item3="Lorem Ipsum is simply "
            item4="Lorem Ipsum is simply "/>
        </section>
    )
}