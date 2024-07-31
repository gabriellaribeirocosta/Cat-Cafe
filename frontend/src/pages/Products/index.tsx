import Button from '../../components/Button'
import DetailsTable from '../../components/DetailsTable'

import style from './style.module.css'

const Products = () => {
  return (
    <section className={style.Products}>
      <header className={style.ListHeader}>
        <h1>Products List</h1>
        <div className={style.button_container}>
          <Button onClick={() => {}}>ADD NEW PRODUCT</Button>
        </div>
      </header>

      <section className={style.ListContent}>
        <DetailsTable />
      </section>
    </section>
  )
}

export default Products
