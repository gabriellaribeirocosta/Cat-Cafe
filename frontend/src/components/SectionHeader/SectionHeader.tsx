import styles from './style.module.css'

interface SectionHeaderProps {
    title: string;
    text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text }) => {
  return (
    <div>
        <h1 className={`${styles.title}`}>{title}</h1>
        <p className={`${styles.text}`}>{text}</p>
    </div>
  );
};

export default SectionHeader;