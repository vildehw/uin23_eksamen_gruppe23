import GameCard from "./GameCard"
import MyGameCard from "./MyGameCard"


export default function MyFavourites({favourites, userFav}) { 

  console.log(favourites) 
  console.log(userFav)

  return(
    <section>
    <h1>FAVOURITES</h1> 

    <MyGameCard sanitygames={userFav} gamesAmount={10}/>
    
    
    

    </section> 
  )
}