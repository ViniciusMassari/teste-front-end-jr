import Box from '../../assets/Box';
import Heart from '../../assets/Heart';
import ShoppingCart from '../../assets/ShoppingCart';
import UserCicle from '../../assets/UserCircle';

import styles from '../Header/_header.module.scss';

const IconsArea = () => {
  return (
    <article className={styles.icons}>
      <Box />
      <Heart />
      <UserCicle />
      <ShoppingCart />
    </article>
  );
};

export default IconsArea;
