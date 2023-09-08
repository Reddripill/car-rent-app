import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface IProps {
   children: React.ReactNode;
   theme?: "dark" | "light";
}

const Button = ({ children, theme = "dark" }: IProps) => {
   return (
      <button
         type="button"
         className={cn(styles.button, styles[`button_${theme}`])}
      >
         {children}
      </button>
   );
};

export default Button;
