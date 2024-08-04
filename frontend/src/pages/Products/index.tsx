import { useContext, useState } from 'react'

import { ProductContext } from '../../contexts/ProductContext'

import Button from '../../components/Button'
import DetailsTable from '../../components/DetailsTable'
import Modal from '../../components/Modal'

import style from './style.module.css'

const Products = () => {
  const { products } = useContext(ProductContext)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <section className={style.Products}>
      <header className={style.ListHeader}>
        <h1>Products List</h1>
        <div className={style.button_container}>
          <Button onClick={openModal}>ADD NEW PRODUCT</Button>
          {modalOpen && <Modal modelType='Product' action='Create' closeModal={closeModal}/>}
        </div>
      </header>

      <section className={style.ListContent}>
        <DetailsTable products={products} />
      </section>
    </section>
  )
}

export default Products
