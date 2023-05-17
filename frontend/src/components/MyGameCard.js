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
      <img src={game.image_url} alt={game.game_title + " poster"} className="poster-mygames" /> 
      <div className="game-info">
        <div className="gametitle">
          <h3>{game.game_title}</h3>   
          {
            //<p>{game?.genre?.map((g) => (<h4>{g.genre_title}</h4>))}</p>
          }
          <p>Played: {game.playtime} hours</p>
        </div>
        <button className="read-more" onClick={() => (handleClick(`../${game.slug.current}`))}>Read More</button>
      </div>
      </article>
    ))
  )
}
