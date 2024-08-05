import { ProductProps } from '../../interfaces/Product'
import style from './style.module.css'

interface DetailsTableProps {
  products: ProductProps[] | null
  openConfirmModal: (product: ProductProps) => void
  openUpdateModal: (product: ProductProps) => void
}

const DetailsTable = ({
  products,
  openConfirmModal,
  openUpdateModal,
}: DetailsTableProps) => {
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
          return (
            <TableBodyRow
              key={product.id}
              item={product}
              openConfirmModal={openConfirmModal}
              openUpdateModal={openUpdateModal}
            />
          )
        })}
      </tbody>
    </table>
  )
}

interface TableBodyRowProps {
  item: ProductProps
  openConfirmModal: (product: ProductProps) => void
  openUpdateModal: (product: ProductProps) => void
}

const TableBodyRow = ({
  item,
  openConfirmModal,
  openUpdateModal,
}: TableBodyRowProps) => {
  return (
    <tr>
      <td>
        <div className={style.thumbnail}>{item.name.at(0)?.toUpperCase()}</div>
      </td>
      <td>{item.name}</td>
      <td className={style.desc}>{item.description}</td>
      <td>R$ {item.price}</td>
      <td>{item.category}</td>
      <td>{item.createdAt && _formatDate(item.createdAt)}</td>
      <td>
        <div className={style.buttons_wrapper}>
          <TableButton
            title="Update product"
            imgSrc="/src/assets/images/icon-pen.png"
            onClick={() => openUpdateModal(item)}
          />
          <TableButton
            title="Delete product"
            imgSrc="/src/assets/images/icon-trash.png"
            onClick={() => openConfirmModal(item)}
          />
        </div>
      </td>
    </tr>
  )
}

interface PropsButton {
  title: string
  imgSrc: string
  onClick?: () => void
}

const TableButton = ({ title, imgSrc, onClick }: PropsButton) => {
  return (
    <button
      type="button"
      title={title}
      className={style.TableButton}
      onClick={onClick}
    >
      <img src={imgSrc} alt="" />
    </button>
  )
}

const _formatDate = (dateAsString: string) => {
  const date = new Date(dateAsString)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = date.toLocaleString('default', { month: 'long' }).slice(0, 3)
  const year = date.getFullYear()
  return `${day}-${month}, ${year}`
}

export default DetailsTable
