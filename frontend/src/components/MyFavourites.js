import GameCard from "./GameCard"


export default function MyFavourites({favourites}) { 

  console.log(favourites)

  return(
    <section>
    <h1>FAVOURITES</h1>
    <GameCard games={favourites} gamesAmount={10}/>
    

    </section> 
  )
}