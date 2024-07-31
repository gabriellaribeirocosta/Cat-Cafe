import { Product, ProductProps } from '../../interfaces/Product'

import style from './style.module.css'

const DetailsTable = () => {
  const products: ProductProps[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a description of a sample project lorem ipsum',
      price: 1.0,
      category: 'Dessert',
      createdAt: '01/01/2024',
    },
    {
      id: 12,
      name: 'Product 2',
      description: 'This is a description of a sample project lorem ipsum',
      price: 12.0,
      category: 'Dessert',
      createdAt: '01/01/2024',
    },
    {
      id: 13,
      name: 'Product 3',
      description: 'This is a description of a sample project lorem ipsum',
      price: 1200.0,
      category: 'Dessert',
      createdAt: '01/01/2024',
    },
    {
      id: 14,
      name: 'Product 4',
      description: 'This is a description of a sample project lorem ipsum',
      price: 120.0,
      category: 'Dessert',
      createdAt: '01/01/2024',
    },
  ]

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
