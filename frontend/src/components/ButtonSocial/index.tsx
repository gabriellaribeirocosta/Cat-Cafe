import styles from './style.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  logo?: string
}

const Button = ({ children, onClick, logo }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div>{logo && <img src={logo} alt="Logo" className={styles.button_logo} />}</div>
      <div>{children}</div>
    </button>
  )
}

export default Button
