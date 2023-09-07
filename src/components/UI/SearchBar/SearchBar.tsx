"use client";
import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import styles from "./SearchBar.module.scss";
import { CheckMobileContext } from "@/providers/CheckMobileProvider";

const SearchBar = () => {
   const { isMobile } = useContext(CheckMobileContext);
   return (
      <div className={styles.wrapper}>
         {!isMobile ? (
            <>
               <div className={styles.search}>
                  <CiSearch />
               </div>
               <input
                  type="text"
                  className={styles.input}
                  placeholder="Search something here"
               />
               <div className={styles.filters}>
                  <LuSettings2 />
               </div>
            </>
         ) : (
            <>
               <div className={styles["search-block"]}>
                  <div className={styles.search}>
                     <CiSearch />
                  </div>
                  <input
                     type="text"
                     className={styles.input}
                     placeholder="Search something here"
                  />
               </div>
               <div className={styles.filters}>
                  <LuSettings2 />
               </div>
            </>
         )}
      </div>
   );
};

export default SearchBar;
