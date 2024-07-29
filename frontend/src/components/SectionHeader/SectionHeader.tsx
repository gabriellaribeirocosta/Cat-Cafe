import styles from './style.module.css'

interface SectionHeaderProps {
    title: string;
    text: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text, className}) => {
  return (
    <div>
        <h1 className={`${styles.title} ${className}`}>{title}</h1>
        <p className={`${styles.text} ${className}`}>{text}</p>
    </div>
  );
};

export default SectionHeader;