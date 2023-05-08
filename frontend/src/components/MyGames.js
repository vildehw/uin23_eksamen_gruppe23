import { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import { fetchAllGames } from "../sanity/gameServices";


export default function MyGames() { 

  const[sanitygames, setSanitygames] = useState(null) 

  const getSanityGames = async () => {
    const data = await fetchAllGames() 
    setSanitygames(data)
  } 

  useEffect(() => {
    getSanityGames()
  }, [])

  console.log(sanitygames)
  return(
    <>
    
    <section> 
    <h1>My games</h1> 
        {sanitygames?.map((game, index) => (
        <article key={index} className="gamecard">
        <h3>{game.game_title}</h3>  
        <p>Sjanger:{game.genre}</p> 
        <p>Spilltid: {game.playtime}</p>
        <Link to={game.slug.current}>Les mer</Link>
        </article>
      ))}
    </section>
    </>
  )
}