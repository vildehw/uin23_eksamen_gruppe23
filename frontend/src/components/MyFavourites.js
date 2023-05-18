import MyGameCard from "./MyGameCard"

export default function MyFavourites({ userFav, user}) { 

  return(
    <>
    <h1 id="favourites-h">FAVOURITES</h1> 
    {user ?
        <section id="games-section">
        <MyGameCard sanitygames={userFav} gamesAmount={10}/>
      </section> :
      <p className="message">Log in to view your favourites</p>
    }
    <a href="#header" className="go-top">Go to top</a>
    </>
  )
}