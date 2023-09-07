import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

interface IColumnsData {
   title: string;
   list: string[];
}

const columnsData: IColumnsData[] = [
   {
      title: "About",
      list: ["How it works", "Featured", "Partnership", "Bussiness Relation"],
   },
   {
      title: "About",
      list: ["How it works", "Featured", "Partnership", "Bussiness Relation"],
   },
   {
      title: "About",
      list: ["How it works", "Featured", "Partnership", "Bussiness Relation"],
   },
];

const Footer = () => {
   return (
      <footer className={`${styles.footer} container`}>
         <div className={styles.information}>
            <div className={styles.brand}>
               <div className="logo">morent</div>
               <div className={styles.slogan}>
                  Our vision is to provide convenience and help increase your
                  sales business.
               </div>
            </div>
            <div className={styles.columns}>
               {columnsData.map((item) => (
                  <div className={styles.column} key={item.title}>
                     <div className={styles.title}>{item.title}</div>
                     <ul className={styles.list}>
                        {item.list.map((link) => (
                           <Link href="#" key={link}>
                              <li className={styles.item}>{link}</li>
                           </Link>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
         <div className={styles.liciences}>
            <div className={`${styles.text} ${styles.licience}`}>
               ©2022 MORENT. All rights reserved
            </div>
            <div className={styles.references}>
               <div className={styles.text}>Privacy & Policy</div>
               <div className={styles.text}>Terms & Condition</div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
