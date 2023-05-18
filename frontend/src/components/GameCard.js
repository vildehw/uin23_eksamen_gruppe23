import { useNavigate } from "react-router-dom";

export default function GameCard({games, gamesAmount}) { 

  const navigate = useNavigate()

  const handleClick = (slug) => {
    navigate(slug)
  } 
  // Kilde: https://stackoverflow.com/questions/68825965/react-router-v6-usenavigate-doesnt-navigate-if-replacing-last-element-in-path

  return(
  games?.filter((game, index) => (index < gamesAmount)).map((game, index) => (
    <article className="gamecard" key={index}>
    <img src={game.background_image} alt={game.name + " poster"} className="poster" />
    <div className="game-info">
      <div className="gametitle">
        <h3 >{game.name}</h3>
        {game.genres.map((g, index) => (<h4 key={`h4${index}`}>{g.name}</h4>))}
      </div>
      <button className="read-more" onClick={() => (handleClick(`../${game.slug}`))}>Read more</button>
    </div>
    </article>
   ))
  )
}