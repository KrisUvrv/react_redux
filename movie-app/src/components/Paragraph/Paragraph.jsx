import styles from './Paragraph.module.css';
import cn from "classnames";

function Paragraph({size, children}) {

  return (
    <p className={cn(styles.paragraph, styles[size])}>{children}</p>
  )
}

export default Paragraph;
