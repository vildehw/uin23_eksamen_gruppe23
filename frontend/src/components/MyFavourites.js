import MyGameCard from "./MyGameCard"

export default function MyFavourites({favourites, userFav, user}) { 

  console.log(favourites) 
  console.log(userFav)

  return(
    <>
    <h1 id="favourites-h">FAVOURITES</h1> 
    {user ?
        <section id="games-section">
        <MyGameCard sanitygames={userFav} gamesAmount={10}/>
      </section> :
      <p className="message">Log in to view your favourites</p>
    }
    </>
  )
}