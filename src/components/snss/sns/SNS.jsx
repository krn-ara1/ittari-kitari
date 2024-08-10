import Link from "next/link";
import styles from "./sns.module.css";
import Image from "next/image";

const SNS = ({ sns }) => {
  const snsIconStyle = {
    background: sns.color,
  };
  return (
    <li>
      <Link
        className={styles.snsContainer}
        href={sns.path}
        rel="noopener"
        target="_blank"
        style={snsIconStyle}
      >
        <span className={styles.snsIcon}>
          <Image
            alt={sns.name}
            className={styles.snsIconImage}
            src={sns.iconPath}
            width={35}
            height={35}
          />
        </span>
        <span className={styles.snsText}>{sns.id}</span>
      </Link>
    </li>
  );
};

export default SNS;
