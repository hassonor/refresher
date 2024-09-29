import styles from './Modal.module.css';
import {ReactNode} from "react";
import {useNavigate} from "react-router-dom";

interface ModalProps {
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({children}) => {
    const navigate = useNavigate();
    const closeHandler = () => {
        navigate('..');
    }
    return (
        <>
            <div className={styles.backdrop} onClick={closeHandler}/>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;