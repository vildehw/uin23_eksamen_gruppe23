import { Link } from "react-router-dom";

export default function GameCard({games, gamesAmount}) {

  return(
  games?.filter((game, index) => (index < gamesAmount)).map((game, index) => (
    <Link  to={game.slug}>
    <article className="gamecard" key={index}>
    <img src={game.background_image} alt={game.name + " poster"} className="poster" />
    <div className="game-info">
      <h3>{game.name}</h3>
      {game.genres.map((g) => (<h4>{g.name}</h4>))}
      <button>BUY</button>
    </div>
    </article>
    </Link>
   ))
  )
}