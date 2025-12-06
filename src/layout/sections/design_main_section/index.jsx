import "./style.css"
import design_icon from '../../../assets/images/home/design_icon.svg'

export const DesignMainSection = () => {
    return(
        <div>
            <div>
                <h1>Design</h1>
                <p>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history.</p>
            </div>
            <img src={design_icon} alt="" />
            <h2>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more. Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history.</h2>
        </div>
    )
}