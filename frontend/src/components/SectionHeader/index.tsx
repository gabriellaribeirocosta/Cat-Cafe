import React from 'react'
import styles from './style.module.css'

interface SectionHeaderProps {
  title: string
  text: string
  className?: string
  titleClassName?: string
  textClassName?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  text,
  className,
  titleClassName,
  textClassName,
}) => {
  return (
    <div className={`${styles.header} ${className}`}>
      <h1 className={`${styles.title} ${titleClassName}`}>{title}</h1>
      <p className={`${styles.text} ${textClassName}`}>{text}</p>
    </div>
  )
}

export default SectionHeader
