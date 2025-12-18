import './style.css'
import ia_icon from '../../../assets/images/home/ia_icon.svg'

export const IaMainSection = () => {
    return (
        <section>
            <section className='container_ia_section'>
                <div className="content_ia_main_section">
                    <div className="container_title_main_section_ia">
                        <h1>Atendimento com IA</h1>
                        <p>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history.</p>
                    </div>
                    <img src={ia_icon} alt="" />
                    <h2>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more. Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history.</h2>
                </div>
            </section>
        </section>
    )
}