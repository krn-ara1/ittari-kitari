import SNS from "@/components/snss/sns/SNS";
import styles from "./snss.module.css";
import { snss } from "@/lib/data";

const SNSs = () => {
  return (
    <ul className={styles.snssContainer}>
      {snss.map((sns, index) => {
        return <SNS key={index} sns={sns} />;
      })}
    </ul>
  );
};

export default SNSs;
