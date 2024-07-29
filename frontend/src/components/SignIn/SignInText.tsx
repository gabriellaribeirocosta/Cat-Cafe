import styles from './style.module.css'

interface TextProps {
    title: string;
    text: string;
}

const Text: React.FC<TextProps> = ({ title, text}) => {
  return (
    <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Text;