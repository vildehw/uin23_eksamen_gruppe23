export default function GameCard({games, gamesAmount}) {
  return(
  games?.filter((game, index) => (index < gamesAmount)).map((game, index) => (
    <article className="gamecard" key={index}>
    <div className="poster">
    </div>
    <div className="game-info">
      <h3>{game.name}</h3>
      <h4>Genre</h4>
      <button>BUY</button>
    </div>
    </article>
   ))
  )
}