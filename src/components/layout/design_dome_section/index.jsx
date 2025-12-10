import DomeGallery from '../../reactBits/domeGallery'
import './style.css'
import suitcase_icon_design_card from '../../../assets/images/home/suitcase_icon_design_card.svg'
import dome_icon from '../../../assets/images/home/dome_icon.svg'

export const DesignDomeSection = () => {
    return (
        <section>
            <div className='title_dome_section'>
                <img src={suitcase_icon_design_card} alt="" />
                <h1>Portfólio</h1>
            </div>
            <div className='secondary_title_dome_section'>
                <img src={dome_icon} alt="" />
                <h1>Gire o domo</h1>
            </div>
            <div style={{ width: "100%", height: "600px" }}>
                <DomeGallery grayscale={false} />
            </div>
        </section>

    )
}
