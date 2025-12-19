import { CardIaSecondary } from '../../cards/card-ia-secondary'
import './style.css'
import check_icon from '../../../assets/images/home/check_icon.svg'

export const IaWHySection = () => {
    return (
        <section>
            <div>
                <h1>Por que a STARTMEDIA?</h1>
                <div>
                    <CardIaSecondary
                        imagem={ check_icon}
                        titulo="Personalização"
                        texto="Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions." />
                    <CardIaSecondary
                        imagem={check_icon }
                        titulo="Velocidade"
                        texto="Working closely with clients to develop tailored solutions that drive measurable success." />
                    <CardIaSecondary
                        imagem={check_icon }
                        titulo="Integração"
                        texto="Maintaining the highest standards in code quality, system performance, and client outcomes." />
                    <CardIaSecondary
                        imagem={check_icon }
                        titulo="Escalabilidade"
                        texto="Operating with transparency and ethical considerations at the forefront of all decisions." />
                </div>
            </div>
        </section>
    )
}