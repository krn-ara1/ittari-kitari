import styles from "./header.module.css";
import DateTime from "@/components/dateTime/DateTime";
import StatusMessage from "@/components/statusMessage/StatusMessage";
import Nav from "@/components/header/nav/Nav";
import Search from "@/components/header/search/Search";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerHead}>
          <DateTime />
          <StatusMessage />
        </div>
        <div className={styles.headerBody}>
          <Link className={styles.headerLogo} href="/">
            <Image
              alt="ittari kitari"
              className={styles.headerLogoImage}
              src="/logo_row.png"
              width={368}
              height={60}
            />
          </Link>
          <Nav />
          <Search />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
