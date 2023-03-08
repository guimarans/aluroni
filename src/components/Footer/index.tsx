import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Footer.module.scss';

export default function footer() {
  return(
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}