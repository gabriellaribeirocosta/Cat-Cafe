import { ReactNode } from 'react'
import styles from './style.module.css'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  logo?: string
  className?: string
}

const ButtonSocial = ({ children, onClick, className, logo }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {logo && <img src={logo} alt="Logo" className={styles.button_logo} />}
      <span>{children}</span>
    </button>
  )
}

export default ButtonSocial
