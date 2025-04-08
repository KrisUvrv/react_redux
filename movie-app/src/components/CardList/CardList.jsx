import styles from './CardList.module.css';
import Card from "../Card/Card.jsx";
import Heading from "../Heading/Heading.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

function CardList({cards}) {

  const { userId } = useContext(UserContext);

  if (!cards.length) {
    return <div className={styles.notFoundMessage}>
      <Heading size='small'>Упс... Ничего не найдено</Heading>
      <Paragraph size='large'>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
    </div>
  }
  return (
    <div className={styles.cardGrid}>
      {cards
        .filter(el => el.userId === userId)
        .map(el => (
        <Card
          key={el.id}
          poster={el.poster}
          title={el.title}
          rating={el.rating}
        />
      ))}
    </div>
  )
}

export default CardList;
