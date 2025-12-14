import './style.css'
import dome_icon from '../../../assets/images/home/dome_icon.svg'
import target_icon from '../../../assets/images/home/target_icon.svg'

export const SiteReasonsSection = () => {
    return(
        <section>
            <div>
                <h2>Por que ter um site?</h2>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <img src={dome_icon} alt="" />
            </div>
            <div>
                <img src={target_icon} alt="" />
                <h2>Por que um site STARTMEDIA?</h2>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
        </section>
    )
}