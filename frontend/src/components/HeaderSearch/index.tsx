import styles from './style.module.css';
import arrowIcon from '../../../public/arrowIcon.png';
import Input from '../Input/index.tsx';
import searchIcon from '../../../public/searchIcon.png';

interface HeaderMobileProps {
}

const HeaderMobile: React.FC<HeaderMobileProps> = () => {
  return (
    <div className={styles.container}>
        <img src={arrowIcon} alt="Arrow Icon" className={styles.arrowIcon}/>
        <div className={styles.input}>
            <Input placeholder={'Search...'} onChange={function () {
                console.log('erro');
            }} value={''} inputClass={styles.search}/>
            <img src={searchIcon} alt="Search Icon" />
        </div>
    </div>
  );
};

export default HeaderMobile;