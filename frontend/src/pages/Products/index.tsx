import { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import Button from '../../components/Button'
import DetailsTable from '../../components/DetailsTable'
import Modal from '../../components/Modal'
import Confirm from '../../components/Confirm'
import { ProductProps } from '../../interfaces/Product'
import ProductService from '../../services/product/product.service'
import style from './style.module.css'

const Products = () => {
  const { products, setProducts } = useContext(ProductContext)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false)
  const [productToRemove, setProductToRemove] = useState<ProductProps | null>(null)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const openConfirmModal = (product: ProductProps) => {
    setProductToRemove(product)
    setConfirmOpen(true)
  }

  const closeConfirmModal = () => {
    setProductToRemove(null)
    setConfirmOpen(false)
  }

  const handleRemoveProduct = async (id: number) => {
    try{
      await ProductService.deleteProduct(id)
      setProducts((productsAfter) => productsAfter?.filter((product) => product.id !== id || null))
      closeConfirmModal()
    }catch(error){
      console.error(error)
    }
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
        <DetailsTable products={products} openConfirmModal={openConfirmModal}/>
      </section>
      {confirmOpen && productToRemove && <Confirm closeConfirm={closeConfirmModal} product={productToRemove} handleDeleteProduct={handleRemoveProduct}/>}
    </section>
  )
}

export default Products
