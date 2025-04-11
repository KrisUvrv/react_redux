import styles from './Heading.module.css';
import cn from "classnames";

function Heading({children, size}) {

  return (
    <h1 className={cn(styles.heading, styles[size])}>{children}</h1>
  )
}

export default Heading;
