import './style.css'
import site_icon from '../../../assets/images/home/site_icon.svg'


export const SiteMainSection = () => {
    return (
        <section className='container-site-section'>
            <div className="content_site_main_section">
                <div className="container_title_main_section_site">
                    <h1>Site e Landing page</h1>
                    <p>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history.</p>
                </div>
                <img src={site_icon} alt="" />
                <h2>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more. Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history.</h2>
            </div>
        </section>

    )
}