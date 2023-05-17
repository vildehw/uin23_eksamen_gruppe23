import MyGameCard from "./MyGameCard"

export default function MyFavourites({favourites, userFav}) { 

  console.log(favourites) 
  console.log(userFav)

  return(
    <>
    <h1 id="favourites">FAVOURITES</h1> 
    <section id="games-section">
      <MyGameCard sanitygames={userFav} gamesAmount={10}/>
    </section> 
    </>
  )
}