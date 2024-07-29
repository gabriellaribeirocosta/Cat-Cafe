import './style.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  className?: string
  logo?: string
}

const Button = ({ children, onClick, className, logo }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <div>{logo && <img src={logo} alt="Logo" className="button_logo" />}</div>
      <div>{children}</div>
    </button>
  )
}

export default Button
