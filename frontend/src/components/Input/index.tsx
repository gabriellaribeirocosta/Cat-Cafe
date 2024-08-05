import styles from './style.module.css'
import React, { ChangeEvent, useState } from 'react'

interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  inputClass?: string
  name?: string
  id?: string
  pattern?: string
  title?: string
  required?: boolean
  className?: string
  icon?: React.ReactNode | null
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  inputClass,
  name,
  id,
  pattern,
  title,
  className,
  icon = null,
  ...props
}) => {
  const [isBlurred, setIsBlurred] = useState(false)

  const handleBlur = () => {
    if (value?.trim()) {
      setIsBlurred(true)
    }
  }

  const handleFocus = () => {
    setIsBlurred(false)
  }

  return (
    <div className={styles.input_group}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        name={name}
        id={id}
        pattern={pattern}
        title={title}
        className={`${styles.input} ${inputClass} ${className} ${
          isBlurred ? 'blurred' : ''
        }`}
        {...props}
      />
      {icon && <div className={styles.icon_content}>{icon}</div>}
    </div>
  )
}

export default Input
