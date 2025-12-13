import './style.css'
import design_guga_section_picture from '../../../assets/images/home/design_guga_section_picture.svg'
import design_guga_section_title from '../../../assets/images/home/design_guga_section_title.svg'
import design_icon from '../../../assets/images/home/design_icon.svg'


export const DesignGugaSection = () => {
    return (
        <section className='design_guga_section'>
            <img src={design_guga_section_picture} alt="" />
            <div className='design_guga_section_content'>
                <img src={design_guga_section_title} alt="" />
                <h1>Dedicated gaming server with low ping & no </h1>
                <div className='design_guga_section_item'>
                    <img src={design_icon} alt="" />
                    <h2>100+ Gamer say good for them</h2>
                </div>
                <div className='design_guga_section_item'>
                    <img src={design_icon} alt="" />
                    <h2>20+ Dedicated gaming server, with no</h2>
                </div>
                <p>We believe in trustworthiness, and most of our users are loyal since we keep their trust by providing valued service. Data breaches could be lethal for any business, and we're of utmost concerned about server security. ​​We know exactly what we're doing, and Symlex VPN runs on the most secure server, minimizing the risk of vulnerabilitiesWe believe in trustworthiness, and most of our users are loyal since .</p>
            </div>
        </section>
    )
}