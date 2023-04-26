import './App.css'; 
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyFavourites from './components/MyFavourites';
import MyGames from './components/MyGames';
import './css/main.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes> 
      <Route element={<Layout/>}>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/gameshop' element={<GameShop />}/>
        <Route path='/mygames' element={<MyGames />}/>
        <Route path='/favourites' element={<MyFavourites />}/> 
      </Route>
    </Routes>
  );
}

export default App;
