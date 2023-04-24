export default function GameCard({games}) {

  console.log(games)
  return(
    <section>
        {games?.map((game, index) => (
        <article key={index} className="gamecard">
        <img src={game.background_image} alt={game.name}/>
        <h3>{game.name}</h3>
        </article>
      ))}
    </section>
  )
}