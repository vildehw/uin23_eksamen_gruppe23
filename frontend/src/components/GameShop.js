import GameCard from "./GameCard";

export default function GameShop({games}) {
  return(
    <>
      <h1 id="gameshop">GAMESHOP</h1>
      <section id="gameshop-window">
        <GameCard games={games} gamesAmount={10}/>
      </section>
    </>
  )
}