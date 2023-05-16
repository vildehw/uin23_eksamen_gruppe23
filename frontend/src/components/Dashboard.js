import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import MyGameCard from "./MyGameCard";
import { fetchGameCount } from "../sanity/gameServices";
import { useEffect, useState } from "react";

export default function Dashboard({games, sanitygames, favourites, sanityUser, userFav, userGames}) { 

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
        <h2>GameShop</h2>
        <Link to="/gameshop"><button className="button">Visit shop</button></Link>
      </div>
      <section id="gameshop-window">
        <GameCard games={games} gamesAmount={3}/>
      </section>
      <section id="my-games-section">
        <section>
          <div className="section-headline">
          <h2>MY GAMES-LIBRARY - {sanityCount}</h2>
          </div>
          {sanityUser ? <MyGameCard sanitygames={userGames} gamesAmount={4}/> : <MyGameCard sanitygames={sanitygames} gamesAmount={4}/> }
        </section>
        <section id="favourites-section">
          <div className="section-headline">
          <h2>MY FAVOURITES</h2>
          </div> 
          <MyGameCard sanitygames={userFav} gamesAmount={6}/>  
          <button className="button"> Go to favourites</button>
        </section>
      </section>
    </>
  )
}