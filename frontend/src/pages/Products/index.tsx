import { useEffect, useState } from 'react'

import { ProductProps } from '../../interfaces/Product'

import Button from '../../components/Button'
import DetailsTable from '../../components/DetailsTable'

import style from './style.module.css'

const Products = () => {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    setProducts([])
  }, [])

  return (
    <section className={style.Products}>
      <header className={style.ListHeader}>
        <h1>Products List</h1>
        <div className={style.button_container}>
          <Button onClick={() => {}}>ADD NEW PRODUCT</Button>
        </div>
      </header>

      <section className={style.ListContent}>
        <DetailsTable products={products} />
      </section>
    </section>
  )
}

export default Products
