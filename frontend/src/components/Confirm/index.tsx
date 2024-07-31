import styles from './style.module.css';
import attentionIcon from '../../../public/attentionIcon.png';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/index.tsx';

const Confirm = () => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <img src={attentionIcon} alt="Attention Icon"/>
          <SectionHeader title={'confirm'} text={`You are about to delete this product. Are you sure?`}/>
        </div>
        <div className={styles.buttons}>
          <Button onClick={function (): void {
            throw new Error('Function not implemented.');
          }} buttonClassName={styles.cancel}>Cancel</Button>
          <Button onClick={function (): void {
            throw new Error('Function not implemented.');
          } }>DELETE</Button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;