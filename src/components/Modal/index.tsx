import styles from './_modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  coordX: number;
  coordY: number;
  info: Product;
}

const Modal = ({ isOpen, setIsOpen, coordX, coordY, info }: ModalProps) => {
  if (isOpen) {
    return (
      <section
        className={styles.modalContainer}
        style={{
          top: `${coordX}`,
          bottom: `${coordY}`,
          left: 0,
          right: 0,
        }}
      >
        <div onClick={() => setIsOpen(false)} className={styles.closeButton}>
          X
        </div>
        <div className={styles.modal}>
          <img src={info.photo} alt='' />
          <div className={styles.productInfo}>
            <p className={styles.name}>{info.productName}</p>
            <p className={styles.price}>R$ {info.price.toLocaleString()}</p>
            <p className={styles.description}>{info.descriptionShort}</p>
            <p className={styles.link}>Veja mais detalhes do produto &rarr;</p>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Modal;
