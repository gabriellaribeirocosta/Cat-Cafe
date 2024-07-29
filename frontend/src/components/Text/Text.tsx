import styles from './style.module.css'

interface TextProps {
    title: string;
    text: string;
    className?: string;
}

const Text: React.FC<TextProps> = ({ title, text, className}) => {
  return (
    <div>
        <h1 className={`${styles.title} ${className}`}>{title}</h1>
        <p className={`${styles.text} ${className}`}>{text}</p>
    </div>
  );
};

export default Text;