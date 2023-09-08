"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../UI/SearchBar/SearchBar";
import { AiFillHeart } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";
import styles from "./Header.module.scss";
import cn from "classnames";
import { CheckMobileContext } from "@/providers/CheckMobileProvider";

const Header = () => {
   const { isMobile } = useContext(CheckMobileContext);
   return (
      <header className={styles.header}>
         <div className={styles.wrapper}>
            <div className={styles.container}>
               {isMobile ? (
                  <>
                     <Link href="/" className="logo">
                        morent
                     </Link>
                     <div className={styles.user}>
                        <Link href="/">
                           <Image
                              src="/user.png"
                              alt="User Photo"
                              width={44}
                              height={44}
                           />
                        </Link>
                     </div>
                  </>
               ) : (
                  <>
                     <div className={styles.left}>
                        <Link href="/" className="logo">
                           morent
                        </Link>
                        <SearchBar />
                     </div>
                     <div className={styles.profil}>
                        <div className={styles.actions}>
                           <div className={styles.action}>
                              <AiFillHeart />
                           </div>
                           <div
                              className={cn(
                                 styles.action,
                                 styles.notifications
                              )}
                           >
                              <IoNotifications />
                           </div>
                           <div className={styles.action}>
                              <RiSettings4Fill />
                           </div>
                        </div>
                        <div className={styles.user}>
                           <Link href="/">
                              <Image
                                 src="/user.png"
                                 alt="User Photo"
                                 width={44}
                                 height={44}
                              />
                           </Link>
                        </div>
                     </div>
                  </>
               )}
            </div>
         </div>
         {isMobile && (
            <div className="absolute w-full left-0 top-24 bg-white pb-[148px]">
               <div className="container">
                  <SearchBar />
               </div>
            </div>
         )}
      </header>
   );
};

export default Header;
