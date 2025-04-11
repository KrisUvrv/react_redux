import styles from './Button.module.css';
import {forwardRef} from "react";

const Button = forwardRef(
  function Button({text, onClick, type}, ref) {
    return (
      <button className={styles.button}
              onClick={onClick}
              ref={ref}
              type={type}>
        {text}
      </button>
    )
  })

export default Button;
