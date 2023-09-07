import React from "react";
import styles from "./Main.module.scss";

const Main = ({ children }: { children: React.ReactNode }) => {
   console.log("Main");
   return <main className={styles.main}>{children}</main>;
};

export default Main;
