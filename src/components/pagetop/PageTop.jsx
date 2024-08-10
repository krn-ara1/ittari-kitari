"use client";

import React, { useEffect, useState } from "react";
import styles from "./pageTop.module.css";

const PageTop = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var scrollY = window.scrollY;
      if (scrollY >= 200) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    });
  });

  const scrollPageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.pageTopContainer}>
      <div className={styles.pageTopWrapper}>
        <button
          id="pageTopButton"
          className={`${styles.pageTopButton} ${
            isScrolledDown && styles.isDisplayed
          }`}
          onClick={scrollPageTop}
        >
          <span className={styles.pageTopButtonText}>page top</span>
        </button>
      </div>
    </div>
  );
};

export default PageTop;
