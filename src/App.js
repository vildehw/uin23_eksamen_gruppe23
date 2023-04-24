import { useEffect } from 'react';
import './App.css'; 
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyFavourites from './components/MyFavourites';
import MyGames from './components/MyGames';
import './css/main.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  const getGames = async() => {
    const response = await fetch (`https://api.rawg.io/api/platforms?key=880241c0a7e24864aef2b9d1687af70d`)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() =>{
    getGames()
  },[])




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
