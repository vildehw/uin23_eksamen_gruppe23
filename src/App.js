import './App.css'; 
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyFavourites from './components/MyFavourites';
import MyGames from './components/MyGames';
import './css/main.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/gameshop' element={<GameShop />}/>
      <Route path='/mygames' element={<MyGames />}/>
      <Route path='/favourites' element={<MyFavourites />}/>
    </Routes>
  );
}

export default App;
