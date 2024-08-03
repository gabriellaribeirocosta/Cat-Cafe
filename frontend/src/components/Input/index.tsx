import './style.module.css'
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
      className={`input ${inputClass} ${isBlurred ? 'blurred' : ''}`}
      {...props}
    />
  )
}

export default Input
