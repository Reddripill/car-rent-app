import React from "react";
import styles from "./Main.module.scss";

const Main = ({ children }: { children: React.ReactNode }) => {
   return (
      <main className={styles.main}>
         <div className="container">{children}</div>
      </main>
   );
};

export default Main;
