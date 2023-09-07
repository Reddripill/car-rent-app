"use client";
import React, { useState, useEffect } from "react";
import { SetStateType } from "@/types";
import checkIsMobile from "@/utilitis/checkIsMobile";

export interface ICheckMobile {
   isMobile?: boolean;
   setIsMobile?: SetStateType<boolean | undefined>;
}

export const CheckMobileContext = React.createContext<ICheckMobile>({});

const CheckMobileProvider = ({ children }: { children: React.ReactNode }) => {
   const breakpoint = 768;
   const [isMobile, setIsMobile] = useState<boolean>();
   useEffect(() => {
      if (typeof window !== undefined) {
         const changeHandler = () => {
            if (window.innerWidth < breakpoint) {
               setIsMobile(true);
            } else {
               setIsMobile(false);
            }
         };
         window.addEventListener("resize", changeHandler);
         changeHandler();
         return () => {
            window.removeEventListener("resize", changeHandler);
         };
      }
   }, []);
   return (
      <CheckMobileContext.Provider value={{ isMobile, setIsMobile }}>
         {children}
      </CheckMobileContext.Provider>
   );
};

export default CheckMobileProvider;
