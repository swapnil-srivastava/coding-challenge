import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      {/* <img src="/assets/cosnova-logo-carnal.png" alt="logo Cosnova" /> */}
      <div>Cosnova Gmbh</div>
    </header>
  );
};

export default Header;
