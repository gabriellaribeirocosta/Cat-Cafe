import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

interface CardDashboardProps {
  children: ReactNode
  logo?: string
  className?: string
  number?: number
}

const CardDashboard = ({
  children,
  className,
  logo,
  number,
}: CardDashboardProps) => {
  return (
    <Link to="/products" title="Products page">
      <button className={`${styles.Card} ${className}`}>
        <div className={styles.CardBox}>
          {logo && <img src={logo} alt="Logo" className={styles.card_logo} />}
          <span className={styles.children}>{children}</span>
        </div>
        {number !== undefined && <div className={styles.number}>{number}</div>}
      </button>
    </Link>
  )
}

export default CardDashboard
