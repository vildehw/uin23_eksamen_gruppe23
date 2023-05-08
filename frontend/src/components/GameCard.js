import { useState } from "react"
import { Link } from "react-router-dom"

export default function GameCard({games}) {

  console.log(games) 


  return(
    <section>
        {games?.map((game, index) => (
        <article key={index} id={game.id} className="gamecard">
        <img src={game.background_image} alt={game.name}/>
        <h3>{game.name}</h3> 
        <Link  to={game.slug}>Les mer</Link>
        </article>
      ))}
    </section>
  )
}