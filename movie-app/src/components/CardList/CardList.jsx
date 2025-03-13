import './CardList.css';
import CardButton from "../CardButton/CardButton.jsx";
import Card from "../Card/Card.jsx";
import Heading from "../Heading/Heading.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";

function CardList({cards}) {

  if (!cards.length) {
    return <div className='not-found-message'>
      <Heading size='small'>Упс... Ничего не найдено</Heading>
      <Paragraph size='large'>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
    </div>
  }
  return (
    <div className='card_grid'>
      {cards.map(el => (
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
