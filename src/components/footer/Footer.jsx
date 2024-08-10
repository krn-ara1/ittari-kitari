import Image from "next/image";
import styles from "./footer.module.css";
import Nav from "@/components/footer/nav/Nav";
import Search from "@/components/footer/search/Search";
import HashTags from "@/components/footer/hashTags/HashTags";
import SNSs from "@/components/snss/SNSs";
import CopyRights from "@/components/footer/copyRights/CopyRights";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerHead}>
          <Link className={styles.footerLogo} href="/">
            <Image
              alt="ittari kitari"
              className={styles.footerLogoImage}
              src="/logo_column.png"
              width={236}
              height={128}
            />
          </Link>
          <div className={styles.footerNavAndSearch}>
            <Nav />
            <Search />
          </div>
        </div>
        <div className={styles.footerBody}>
          <HashTags />
          <SNSs />
        </div>
        <div className={styles.footerFoot}>
          <CopyRights />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
