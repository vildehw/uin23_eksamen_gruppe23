import { Link, matchPath } from "react-router-dom";


export default function MyGames({sanitygames}) { 

  
  return(
    <>
    
    <section> 
    <h1>My games</h1> 
        {sanitygames?.map((game, index) => (
        <article key={index} className="gamecard">
        <h3>{game.game_title}</h3>  
        <p>Sjanger:</p> 
        <p>Spilltid: {game.playtime}</p>
        <Link to={game.slug.current}>Les mer</Link>
        </article>
      ))}
    </section>
    </>
  )
}