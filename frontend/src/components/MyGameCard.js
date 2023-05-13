import { useNavigate } from "react-router-dom";

export default function MyGameCard({sanitygames, gamesAmount}){

  const navigate = useNavigate()

  const handleClick = (slug) => {
    navigate(slug)
  }

  // Kilde: https://stackoverflow.com/questions/68825965/react-router-v6-usenavigate-doesnt-navigate-if-replacing-last-element-in-path

  return(
    sanitygames?.filter((game, index) => (index < gamesAmount)).map((game, index) => (
      <article key={index} className="gamecard">
      <h3>{game.game_title}</h3>  
      <p>Genre:</p>
      <p>Played: {game.playtime} hours</p>
      <button className="button" onClick={() => (handleClick(`../${game.slug.current}`))}>Read More</button>
      </article>
    ))
  )
}
