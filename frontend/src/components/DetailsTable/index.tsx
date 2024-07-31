import { Product, ProductProps } from '../../interfaces/Product'

import style from './style.module.css'

const DetailsTable = () => {
  const products: ProductProps[] = []

  return (
    <table className={style.DetailsTable}>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Date of include</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product: ProductProps) => {
          return <TableBodyRow key={product.id} item={product} />
        })}
      </tbody>
    </table>
  )
}

const TableBodyRow = ({ item }: Product) => {
  return (
    <tr>
      <td>
        <div className={style.thumbnail}>{item.name.at(0)?.toUpperCase()}</div>
      </td>
      <td>{item.name}</td>
      <td className={style.desc}>{item.description}</td>
      <td>R$ {item.price}</td>
      <td>{item.category}</td>
      <td>{item.createdAt}</td>
      <td>
        <div className={style.buttons_wrapper}>
          <TableButton
            title="Update product"
            imgSrc="/src/assets/images/icon-pen.png"
          />
          <TableButton
            title="Delete product"
            imgSrc="/src/assets/images/icon-trash.png"
          />
        </div>
      </td>
    </tr>
  )
}

interface PropsButton {
  title: string
  imgSrc: string
}

const TableButton = ({ title, imgSrc }: PropsButton) => {
  return (
    <button type="button" title={title} className={style.TableButton}>
      <img src={imgSrc} alt="" />
    </button>
  )
}

export default DetailsTable
