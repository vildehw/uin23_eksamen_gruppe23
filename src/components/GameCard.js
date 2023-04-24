export default function GameCard({games}) {
  return(
    <>
        {games?.map((game, index) => (
        <article key={index}>
        <img src={game.background_image} alt={game.name}/>
        </article>
      ))}
    </>
  )
}