import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} type="text" placeholder="サイト内検索"/>
      <button className={styles.searchButton} type="submit">
      </button>
    </div>
  );
};

export default Search;
