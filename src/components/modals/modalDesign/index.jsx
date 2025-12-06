import './style.css'
import Modal from '@mui/material/Modal'
import iconeSetaModal from '../../../assets/images/home/icone_seta_modal.svg'
import modalDesignImage from '../../../assets/images/home/modal_design_image.svg'
import design_icon from '../../../assets/images/home/design_icon.svg'

export const ModalDesign = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal-content-design">
                <img src={modalDesignImage} alt="" />
                <div className='modal-info-content-design'>
                    <div className='container-modal-title-design'>
                        <img src={design_icon} alt="" />
                        <h2>Design</h2>
                    </div>
                    <p>James Maitland Stewart (May 20, 1908 – July 2, 1997) was an American actor and military pilot. Known for his distinctive drawl and everyman screen persona, Stewart's film career spanned 80 films from 1935 to 1991. With the strong morality he portrayed both on and off the screen, he epitomized the "American ideal". </p>
                    <div>
                        <img src={iconeSetaModal} alt="" />
                        <a href="">Saiba mais</a>
                    </div>
                </div>
            </div>
        </Modal>

    )
}


