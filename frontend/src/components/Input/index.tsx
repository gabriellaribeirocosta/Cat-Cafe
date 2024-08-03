import styles from './style.module.css'
import React, { ChangeEvent, useState } from 'react'

interface InputProps {
  type?: string
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  inputClass?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  ...props
}) => {
  const [isBlurred, setIsBlurred] = useState(false)

  const handleBlur = () => {
    if (value.trim()) {
      setIsBlurred(true)
    }
  }

  const handleFocus = () => {
    setIsBlurred(false)
  }

  return (
    <input
  const handleFocus = () => {
    setIsBlurred(false)
  }
      onChange={onChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      className={`${styles.input} ${className} ${
        isBlurred ? styles.blurred : ''
      }`}
      {...props}
    />
  )
}

export default Input
      className={`input ${inputClass} ${isBlurred ? 'blurred' : ''}`}
      {...props}
    />
  )
}

export default Input
