import styles from './style.module.css'
import attentionIcon from '../../../public/attentionIcon.png'
import SectionHeader from '../SectionHeader/index.tsx'
import Button from '../Button/index.tsx'

const Confirm = () => {
  const handleCancel = () => {}

  const handleDelete = () => {}

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <img src={attentionIcon} alt="Attention Icon" />
          <SectionHeader
            title={'confirm'}
            text={`You are about to delete this product. Are you sure?`}
          />
        </div>
        <div className={styles.buttons}>
          <Button onClick={handleCancel} buttonClassName={styles.cancel}>
            Cancel
          </Button>
          <Button onClick={handleDelete}>DELETE</Button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
