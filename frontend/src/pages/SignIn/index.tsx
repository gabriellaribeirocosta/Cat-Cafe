import { useState, ChangeEvent } from 'react';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonSocial from '../../components/ButtonSocial';
import SectionHeader from '../../components/SectionHeader';
import logoGoogle from '../../../public/logoGoogle.png';
import logoFacebook from '../../../public/logoFacebook.png';
import styles from './style.module.css';
import '../../normalize.css';
import { authService } from '../../services/firebase/auth/authService';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignInClick = async () => {
    if (!email || !password) return;
    const response = await authService.signIn(email, password);
    if (typeof response === 'object' && response.uid) {
    } else if (typeof response === 'string') {
      console.error(response);
    }
  };

  const handleSignUpClick = async () => {
    if (!email || !password) return;
    const response = await authService.signUp(email, password);
    if (typeof response === 'object' && response.uid) {
      setEmail('');
      setPassword('');
      console.log(response.uid);
    } else if (typeof response === 'string') {
      console.error(response);
    }
  };

  const handleGoogleLoginClick = async () => {
    const response = await authService.googleAuth();
    if (typeof response === 'object' && response.uid) {
      console.log(response.uid);
    } else if (typeof response === 'string') {
      console.error(response);
    }
  };

  const handleFacebookLoginClick = async () => {
    const response = await authService.facebookAuth();
    if (typeof response === 'object' && response.uid) {
      console.log(response.uid);
    } else if (typeof response === 'string') {
      console.error(response);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.box}>
        <Logo text="CAT CAFE" className={styles.logo} />
        <SectionHeader
          title="SIGN IN"
          text="Enter your credentials to access your account"
          className={styles.sectionHeader}
          titleClassName={styles.sectionTitle}
          textClassName={styles.sectionText}
        />
        <div>
          <p className={styles.titleEmail}>Email</p>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className={styles.EmailInput}
          />
          <p className={styles.titlePassword}>Password</p>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.PasswordInput}
          />
          <Button onClick={handleSignInClick} className={styles.SignInButton}>
            SIGN IN
          </Button>
          <Button onClick={handleSignUpClick} className={styles.SignUpButton}>
            SIGN UP
          </Button>
          <div className={styles.division}>
            <div className={styles.line}></div>
            <p>Or sign in with</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.button_container}>
            <ButtonSocial
              className={styles.googleButton}
              onClick={handleGoogleLoginClick}
              logo={logoGoogle}
            >
              Google
            </ButtonSocial>
            <ButtonSocial
              className={styles.facebookButton}
              onClick={handleFacebookLoginClick}
              logo={logoFacebook}
            >
              Facebook
            </ButtonSocial>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
