import styles from './Card.module.css';
import {useState} from "react";

function Card({poster, title, rating}) {

const [isFavorite, setFavorite] = useState(false);

const toggleFavorite = () => {
  setFavorite(prev => !prev);
}

  return (
    <div className={styles.card}>
      <div className={styles.card__poster}>
        <div className={styles.card__rating}>
          <img src="/star.svg" alt="rating"/>
          <span>{rating}</span>
        </div>
        <img src={poster} alt="poster"/>
      </div>

      <h2 className={styles.card__title}>{title}</h2>
      <button className={styles.card__button} onClick={toggleFavorite}>
        <img src={isFavorite ? '/liked.svg' : 'like.svg'} alt="like"/>
        {isFavorite ? <span className={styles.liked}>В избранном</span> : <span>В избранное</span>}
      </button>
    </div>
  )
}

export default Card;
