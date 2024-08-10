import styles from "./nav.module.css";
import NavItem from "@/components/footer/nav/navItem/NavItem";
import { pages } from "@/lib/data";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <h2 className={styles.navHead}>ナビゲーションメニュー</h2>
      <ul className={styles.navBody}>
        {pages.map((page, index) => {
          return <NavItem key={index} page={page} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
