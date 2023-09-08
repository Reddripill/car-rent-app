import React from "react";
import styles from "./Ads.module.scss";
import Button from "../UI/Button/Button";
import Image from "next/image";

const Ads = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.item}>
            <div className={styles.content}>
               <div className={styles.title}>
                  The Best Platform for Car Rental
               </div>
               <div className={styles.text}>
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
               </div>
               <Button>Rental Car</Button>
            </div>
            <div className={styles.background}>
               <div className="relative h-full w-full">
                  <Image src="/adLightBg.png" alt="Bg for ad" fill />
               </div>
            </div>
            <div className={styles.car}>
               <div className={styles["car-wrapper"]}>
                  <Image src="/adCar1.png" alt="Car" fill />
               </div>
            </div>
         </div>
         <div className={`${styles.item} ${styles["item_dark"]}`}>
            <div className={styles.content}>
               <div className={styles.title}>
                  Easy way to rent a car at a low price
               </div>
               <div className={styles.text}>
                  Providing cheap car rental services and safe and comfortable
                  facilities.
               </div>
               <Button theme="light">Rental Car</Button>
            </div>
            <div className={styles.background}>
               <div className="relative h-full w-full">
                  <Image src="/adDarkBg.png" alt="Bg for ad" fill />
               </div>
            </div>
            <div className={styles.car}>
               <div className={styles["car-wrapper"]}>
                  <Image src="/adCar2.png" alt="Car" fill />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Ads;
