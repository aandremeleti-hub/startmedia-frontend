import { CardMain } from '../../../components/cards/card-main'
import './style.css'
import iconeBotaoSeta from '../../../assets/images/home/icone_botao_seta.svg'
import primaryImageMain from '../../../assets/images/home/primary_image_main.svg'
import button_card_main from '../../../assets/images/home/button_card_main.svg'
import design_icon from '../../../assets/images/home/design_icon.svg'
import site_icon from '../../../assets/images/home/site_icon.svg'
import ia_icon from '../../../assets/images/home/ia_icon.svg'
import { useState } from 'react'
import { ModalDesign } from '../../../components/modals/modalDesign'
import { ModalSite } from '../../../components/modals/modalSite'
import { ModalIa } from '../../../components/modals/modalIa'

export const Main = () => {

    const [openModalDesign, setOpenModalDesign] = useState(false)

    const abrirModalDesign = () => {
        setOpenModalDesign(true)
    }

    const fecharModalDesign = () => {
        setOpenModalDesign(false)
    }

    const [openModalSite, setOpenModalSite] = useState(false)

    const abrirModalSite = () => {
        setOpenModalSite(true)
    }

    const fecharModalSite = () => {
        setOpenModalSite(false)
    }

    const [openModalIa, setOpenModalIa] = useState(false)

    const abrirModalIa = () => {
        setOpenModalIa(true)
    }

    const fecharModalIa = () => {
        setOpenModalIa(false)
    }

    return (
        <main>
            <div className='content-main'>
                <div className='box-text-main'>
                    <h1>Transformando gente em <span className='highlighted-word'>cliente</span></h1>
                    <p>Estrutura digital simplificada que traz o cliente até você pronto para comprar</p>
                    <div className='box-button-main'>
                        <img src={iconeBotaoSeta} alt="" />
                        <button>Contato</button>
                    </div>
                </div>
                <img src={primaryImageMain} alt="" />
            </div>

            <div className='box-cards-main'>
                <CardMain
                    image={design_icon}
                    titulo="Design"
                    paragrafo="Design estratégico que conecta sua marca ao público certo e impulsiona seus resultados"
                    image_button={button_card_main}
                    abrirModal={abrirModalDesign} />

                <CardMain
                    image={site_icon}
                    titulo="Site e landing page"
                    paragrafo="Sites e landing pages que fortalecem sua marca e transformam visitas em resultados"
                    image_button={button_card_main}
                    abrirModal={abrirModalSite}/>

                <CardMain
                    image={ia_icon}
                    titulo="IA "
                    paragrafo="Atendimento inteligente que automatiza sua comunicação e acelera suas conversões"
                    image_button={button_card_main}
                    abrirModal={abrirModalIa} />

            </div>

            <ModalDesign open={openModalDesign} onClose={fecharModalDesign} />
            <ModalSite open={openModalSite} onClose={fecharModalSite} />
            <ModalIa open={openModalIa} onClose={fecharModalIa} />


        </main>
    )
}