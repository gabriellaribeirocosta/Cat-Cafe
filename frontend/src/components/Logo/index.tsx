import styles from './style.module.css'

interface LogoProps {
  text: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ text, className }) => {
  return (
    <div className={`${styles.logo} ${className}`}>
    <div className={styles.vertical_bar}></div>
    <h1 className={styles.text}>{text}</h1>
    </div>
  );
};

export default Logo;