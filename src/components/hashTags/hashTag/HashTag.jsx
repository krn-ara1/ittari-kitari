import Link from "next/link";
import styles from "./hashTag.module.css";

const HashTag = ({hashTag}) => {
  return (
    <li>
      <Link className={styles.hashTagContainer} href={hashTag.path}>
        <span>#</span>
        <span className={styles.hashTagText}>{hashTag.text}</span>
        <span className={styles.hashTagEmoji}>{hashTag.emoji}</span>
      </Link>
    </li>
  );
};

export default HashTag;
