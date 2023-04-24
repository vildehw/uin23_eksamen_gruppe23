import GameCard from "./GameCard";

export default function Dashboard({games}) {

  return(
    <>
      <GameCard games={games} />
    </>
  )
}