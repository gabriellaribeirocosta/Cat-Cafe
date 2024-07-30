import styles from './style.module.css';
import { ReactNode } from 'react';
 
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  buttonClassName?: string;
}
 
const Button = ({ children, onClick, buttonClassName}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${buttonClassName}`}>
      {children}
    </button>
  )
}
 
export default Button;