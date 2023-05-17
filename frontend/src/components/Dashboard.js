import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import MyGameCard from "./MyGameCard";
import { fetchGameCount } from "../sanity/gameServices";
import { useEffect, useState } from "react";

export default function Dashboard({games, sanitygames, favourites, sanityUser, userFav, userGames, user}) { 

  //kode for å telle antall spill i myGames (groq-count)
  const[sanityCount, setSanityCount] = useState(null) 

  const getGameCount = async () => {
    const data = await fetchGameCount() 
    setSanityCount(data) 
  } 

  useEffect(() => {
    getGameCount()
  }, [])  

  console.log(sanityUser)
  
  return(
    <>
      <div className="section-headline">
        <h2><i className="bi bi-shop"></i> GameShop</h2>
        <Link to="/gameshop"><button id="shop-button">Visit shop</button></Link>
      </div>
      <section id="games-section">
        <GameCard games={games} gamesAmount={3}/>
      </section>
      <section id="my-games-section">
        <section id="my-games-library">
          <div className="section-headline">
            <h2><i className="bi bi-house-door"></i> MY GAMES-LIBRARY - {sanityCount}</h2>
            <Link to="/mygames"><button id="library-button">Go to library</button></Link>
          </div>
          {user ? <MyGameCard sanitygames={sanitygames} gamesAmount={4}/> : <p className="message">Log in to view your games</p>}
        </section>
        <section id="favourites-section">
          <div className="section-headline">
            <h2><i className="bi bi-heart"></i> MY FAVOURITES</h2>
            <Link to="/favourites"><button id="favourites-button"> Go to favourites</button></Link>
          </div> 
          {user ? null : <p className="message">Log in to view your favourites</p>}
          <MyGameCard sanitygames={userFav} gamesAmount={6}/>  
        </section>
      </section>
    </>
  )
}