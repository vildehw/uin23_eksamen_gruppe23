import { useEffect, useState } from 'react';
import './App.css'; 
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyFavourites from './components/MyFavourites';
import MyGames from './components/MyGames';
import './css/main.css'
import { Route, Routes } from 'react-router-dom';
import { fetchAllGames } from './sanity/gameServices';
import GamePage from './components/GamePage';

function App() {


  const [games, setGames] = useState([])

  const getGames = async() => {
    const response = await fetch (`https://api.rawg.io/api/games?key=880241c0a7e24864aef2b9d1687af70d`)
    const data = await response.json()
    setGames(data.results)
  }

  useEffect(() =>{
    getGames()
  },[])




 



  return (
    <Routes>
      <Route path='/' element={<Dashboard games={games}/>}/>
      <Route path='/gameshop' element={<GameShop />}/>
      <Route path='/mygames' element={<MyGames/>}/>
      <Route path='/favourites' element={<MyFavourites />}/> 
      <Route exact path='mygames/:slug' element={<GamePage/>}/>
    </Routes>
  );
}

export default App;
