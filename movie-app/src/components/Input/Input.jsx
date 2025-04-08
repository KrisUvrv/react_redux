import styles from './Input.module.css';
import {forwardRef, useEffect} from "react";
import cn from "classnames";

const Input = forwardRef(
  function Input({icon, placeholder, className, appearance, error, setError, ...props}, ref) {

    useEffect(() => {
      if (error) {
        const timer = setTimeout(() => {
          setError(false)
        }, 1500);
        return () => clearTimeout(timer);
      }
    }, [error]);

    const handleInputChange = (e) => {
      if (error) {
        setError(false);
      }
    };

    return (
      <div className={cn(styles[className], {[styles.error]: error})}>
        {icon && <div>{icon}</div>}
        <input type="text"
               placeholder={placeholder}
               onChange={handleInputChange}
               ref={ref}
               {...props}/>
        {error && <span className={styles.errorText}>Поле не может быть пустым</span>}
      </div>
    );
  })

export default Input;
