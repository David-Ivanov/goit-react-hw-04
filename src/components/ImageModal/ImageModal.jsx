import Modal from 'react-modal';
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, data, toggle }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggle}
            ariaHideApp={false}
            className={css.content}
            overlayClassName={css.overlay}
        >
            <img className={css.img} src={data.image} alt={data.description} />
            <p className={css.text}>{data.description}</p>
        </Modal>
    )
}