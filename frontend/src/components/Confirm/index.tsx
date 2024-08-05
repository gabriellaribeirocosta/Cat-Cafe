import styles from './style.module.css'
import attentionIcon from '../../../public/attentionIcon.png'
import SectionHeader from '../SectionHeader/index.tsx'
import Button from '../Button/index.tsx'
import { ProductProps } from '../../interfaces/Product.ts'

interface ConfirmProps {
  closeConfirm: () => void
  product: ProductProps
  handleDeleteProduct: (id:number) => void
}

const Confirm = ({ closeConfirm, product, handleDeleteProduct }:ConfirmProps) => {
  const handleCancel = () => {
    closeConfirm()
  }

  const handleDelete = () => {
    if(product.id !== undefined){
      handleDeleteProduct(product.id)
      closeConfirm()
    }
  }

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
          <Button onClick={handleCancel} className={styles.cancel}>
            Cancel
          </Button>
          <Button onClick={handleDelete}>DELETE</Button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
