import styles from './style.module.css'

interface SectionHeaderProps {
  title: string
  text: string
  ClassName?: string
  textClassName?: string
  titleClassName?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  text,
  ClassName,
  textClassName,
  titleClassName,
}) => {
  return (
    <div className={`${ClassName}`}>
      <h1 className={`${styles.title} ${titleClassName}`}>{title}</h1>
      <p className={`${styles.text} ${textClassName}`}>{text}</p>
    </div>
  )
}

export default SectionHeader
