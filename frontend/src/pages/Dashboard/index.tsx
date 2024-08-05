import styles from './style.module.css'
import CardDashboard from '../../components/CardDashboard'
import productsIcon from '../../../public/productsIcon.png'
import { ProductContext } from '../../contexts/ProductContext'
import { useContext } from 'react'

const Dashboard = () => {
  const { products } = useContext(ProductContext);
  const numberProducts = products ? products.length : 0;
  
  return (
    <section className={styles.Dashboard}>
      <div className={styles.CardsList}></div>
      <div className={styles.cardRow}>
        <CardDashboard
          className={styles.CardStyle}
          logo={productsIcon}
          number={numberProducts}
        >
          Products
        </CardDashboard>
      </div>
    </section>
  )
}

export default Dashboard
