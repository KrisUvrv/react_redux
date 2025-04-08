import './App.css'
import Heading from "./components/Heading/Heading.jsx";
import Paragraph from "./components/Paragraph/Paragraph.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Search from "./components/Search/Search.jsx";
import {useState} from "react";
import CardList from "./components/CardList/CardList.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import {UserContextProvider} from "./context/user.context.jsx";

const INITIAL_DATA = [
  {id: 1, poster: 'public/cards/card1.jpg', title: 'Black Widow', rating: '324',},
  {id: 2, poster: 'public/cards/card2.jpg', title: 'Shang Chi', rating: '124',},
  {id: 3, poster: 'public/cards/card3.jpg', title: 'Loki', rating: '235',},
  {id: 4, poster: 'public/cards/card4.jpg', title: 'How I Met Your Mother', rating: '123',},
  {id: 5, poster: 'public/cards/card5.jpg', title: 'Money Heist', rating: '8125',},
  {id: 6, poster: 'public/cards/card6.jpg', title: 'Friends', rating: '123',},
  {id: 7, poster: 'public/cards/card7.jpg', title: 'The Big Bang Theory', rating: '12',},
  {id: 8, poster: 'public/cards/card8.jpg', title: 'Two And a Half Men', rating: '456',},
];

function App() {

  const [cards] = useState(INITIAL_DATA);

  return (
    <UserContextProvider>
      <div className='app'>
        <Navbar/>
        <Heading size='large'>Поиск</Heading>
        <Paragraph size='small'>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
        <Search/>
        <CardList cards={cards}/>
        <LoginForm/>
      </div>
    </UserContextProvider>
  )
}

export default App;
