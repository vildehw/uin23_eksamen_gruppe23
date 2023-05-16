import GameCard from "./GameCard"
import MyGameCard from "./MyGameCard"


export default function MyFavourites({favourites, sanityFav}) { 

  console.log(favourites) 
  console.log(sanityFav)

  return(
    <>
    <h1 id="favourites">FAVOURITES</h1> 
    <section>

    <MyGameCard sanitygames={sanityFav} gamesAmount={10}/>
    <MyGameCard sanitygames={favourites} gamesAmount={10}/>
  
    </section> 
    </>
  )
}