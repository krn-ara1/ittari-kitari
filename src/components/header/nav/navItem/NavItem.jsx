import styles from "./navItem.module.css";
import Link from "next/link";

const NavItem = ({ page }) => {
  return (
    <li>
      <Link className={styles.navItemContainer} href={page.path}>
        <span className={styles.navItemJa}>{page.jaText}</span>
        <span className={styles.navItemEn}>{page.enText}</span>
      </Link>
    </li>
  );
};

export default NavItem;
