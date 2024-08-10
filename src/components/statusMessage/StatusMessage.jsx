import Image from "next/image";
import styles from "./statusMessage.module.css";

const StatusMessage = () => {
  return (
    <div className={styles.statusMessageContainer}>
      <Image
        alt="管理人のアイコン"
        className={styles.statusMessageIcon}
        src="/icon_photo.jpg"
        width={1605}
        height={1606}
      />
      <div className={styles.statusMessageTextContainer}>
        <div className={styles.statusMessageTextWrapper}>
          <span className={styles.statusMessageText}>
            このサイトは作成中ですm(__)m
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusMessage;
