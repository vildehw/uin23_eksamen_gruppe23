import GameCard from "./GameCard"
import MyGameCard from "./MyGameCard"


export default function MyFavourites({favourites, sanityFav}) { 

  console.log(favourites) 
  console.log(sanityFav)

  return(
    <section>
    <h1>FAVOURITES</h1> 

    <MyGameCard sanitygames={sanityFav} gamesAmount={10}/>
    
    
    

    </section> 
  )
}