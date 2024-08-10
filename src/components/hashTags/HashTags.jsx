import HashTag from "@/components/hashTags/hashTag/HashTag";
import styles from "./hashTags.module.css";
import { hashTags } from "@/lib/data";

const HashTags = () => {
  return (
    <ul className={styles.hashTagsContainer}>
      {hashTags.map((hashTag, index) => {
        return <HashTag key={index} hashTag={hashTag} />;
      })}
    </ul>
  );
};

export default HashTags;
