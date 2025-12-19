import { CardIaPrimary } from '../../cards/card-ia-primary'
import './style.css'
import dashboard_ia_primary_cards_section from '../../../assets/images/home/dashboard_ia_primary_cards_section.svg'
import robot_ia_primary_cards_section from '../../../assets/images/home/robot_ia_primary_cards_section.svg'
import file_ia_primary_cards_section from '../../../assets/images/home/file_ia_primary_cards_section.svg'

export const IaPrimaryCardsSection = () => {
    return (
        <section>
            <div className='content-ia-primary-cards'>
                <h1 className='title-ia-primary-cards'>O que você ganha?</h1>
                <div className='container-ia-primary-cards'>
                    <CardIaPrimary
                        imagem={dashboard_ia_primary_cards_section}
                        titulo="Atendimento 24h"
                        texto="O cliente consegue resolver tudo rápido, sem esperar, sem burocracia, sem repetir informações. Isso aumenta satisfação e conversão." />
                    <CardIaPrimary
                        imagem={robot_ia_primary_cards_section}
                        titulo="Atendimento 24h"
                        texto="O cliente consegue resolver tudo rápido, sem esperar, sem burocracia, sem repetir informações. Isso aumenta satisfação e conversão." />
                    <CardIaPrimary
                        imagem={file_ia_primary_cards_section}
                        titulo="Atendimento 24h"
                        texto="O cliente consegue resolver tudo rápido, sem esperar, sem burocracia, sem repetir informações. Isso aumenta satisfação e conversão." />
                </div>
            </div>
        </section>
    )
}