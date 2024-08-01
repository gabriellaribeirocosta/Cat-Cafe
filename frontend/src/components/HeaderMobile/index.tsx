import Logo from '../Logo/index.tsx';
import hamburguerIcon from '../../../public/hamburguerIcon.png';
import styles from './style.module.css';

const openMenu = () => {

}

const HeaderMobile = () => {
  return (
    <div className={styles.container}>
        <Logo text={'CAT CAFE'}/>
        <img src={hamburguerIcon} alt="" onClick={openMenu}/>
    </div>
  );
};

export default HeaderMobile;