import Links from "./Links/Links";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Header;
