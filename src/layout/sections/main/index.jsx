import { CardMain } from '../../../components/cards/card-main'
import './style.css'
import iconeBotaoSeta from '../../../assets/images/home/icone_botao_seta.svg'
import primaryImageMain from '../../../assets/images/home/primary_image_main.svg'

export const Main = () => {
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

            <CardMain parametro1="parametro1" parametro2="parametro2" />
        </main>
    )
}