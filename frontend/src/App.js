import { useEffect, useState } from 'react';
import './App.css'; 
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyFavourites from './components/MyFavourites';
import MyGames from './components/MyGames';
import './css/main.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import GamePage from './components/GamePage';
import { fetchAllGames } from "./sanity/gameServices";
import { fetchAllUsers } from './sanity/userServices';
import MyWishlist from './components/MyWishlist';

function App() {

  function getDate(separator='-') {
    const date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    // Kilder: https://www.w3schools.com/js/js_date_methods.asp & https://stackoverflow.com/questions/43744312/react-js-get-current-date

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${day<10?`0${day}`:`${day}`}`
  }

  const [games, setGames] = useState([])
  //const [platformerGames, setPlatformerGames] = useState([])

  const getGames = async() => {
    const response = await fetch (`https://api.rawg.io/api/games?key=880241c0a7e24864aef2b9d1687af70d&ordering=-released&dates=2023-01-01,${getDate()}`)
    const data = await response.json()
    setGames(data?.results)
  }

  useEffect(() =>{
    getGames()
  },[])



  const[sanitygames, setSanitygames] = useState(null) 

  const getSanityGames = async () => {
    const data = await fetchAllGames() 
    setSanitygames(data)
  } 

  useEffect(() => {
    getSanityGames()
  }, []) 

  
  
const [user, setUser] = useState("")
const [email, setEmail] = useState("")
const [sanityUser, setSanityUser] = useState("")

const getSanityUsers = async () => {
const data = await fetchAllUsers()   
data.map((d) => (d.username === user? setSanityUser(d) : null ))
}  

useEffect(() => {
getSanityUsers()
}, [user])   

console.log(sanityUser) 


const [userFav, setUserFav] = useState([])

useEffect(() => {
  const userFavourites = sanityUser.favourites 
  setUserFav(userFavourites)
  }, [sanityUser])   

const userGames = sanityUser.games



  return (
    <Routes> 
      <Route element={<Layout user={user} setUser={setUser} email={email} setEmail={setEmail} sanityUser={sanityUser} setSanityUser={setSanityUser}/>}>
        <Route path='/' element={<Dashboard games={games} sanitygames={sanitygames} userFav={userFav}/>}/>
        <Route path='/gameshop' element={<GameShop games={games} />}/>
        <Route path='/mygames' element={<MyGames sanitygames={sanityUser ? userGames : sanitygames}/>}/>
        <Route path='/favourites' element={<MyFavourites userFav={userFav}/>}/>  
        <Route path='/:slug' element={<GamePage games={games} sanitygames={sanitygames} sanityUser={sanityUser} setUserFav={setUserFav} userFav={userFav}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
