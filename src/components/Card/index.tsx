import { MouseEventHandler, useState } from 'react';
import styles from './_card.module.scss';
import Modal from '../Modal';

const Card = ({ info }: Card) => {
  const randomNumber = info.price * 2;
  const parcela = info.price / 12;

  const [modalInfo, setModalInfo] = useState<Product>(info);

  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { clientX, clientY } = event;
    setModalInfo(info);
    setCoords({ x: clientX, y: clientY });
    setIsOpen(!isOpen);
  }

  function openModal() {}
  return (
    <div className={styles.card}>
      <img src={info.photo} alt='' />
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className={styles.prices}>
        <p className={styles.originalPrice}>
          R$ {randomNumber.toLocaleString().replace('.', ',')}
        </p>
        <p className={styles.bestPrice}>
          R$ {info.price.toLocaleString().replace('.', ',')}
        </p>
        <p className={styles.otherInfo}>
          ou até 12x de R$ {parcela.toLocaleString()} sem juros{' '}
        </p>
        <p className={styles.freeShipping}>Frete grátis</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buyButton} onClick={(e) => handleModal(e)}>
          comprar
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        coordX={coords.x}
        coordY={coords.y}
        info={modalInfo}
      />
    </div>
  );
};

export default Card;
