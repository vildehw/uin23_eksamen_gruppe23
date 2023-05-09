<<<<<<< HEAD
import { add } from "lodash"
import { useEffect, useState } from "react"
=======
>>>>>>> 044ac03ed514b0b58a62604927af4b6bdd8e53c5
import { useParams } from "react-router"
import { fetchGame } from "../sanity/gameServices"
import { useEffect, useState } from "react"

export default function GamePage() {
 
  const {slug} = useParams()

  const [sanityGame, setSanityGame] = useState(null) 

  const getsanityGame = async (slug) => {
    const data = await fetchGame(slug) 
    setSanityGame(data[0])
  }  

  useEffect(() => {
    getsanityGame(slug)
  }, [slug]) 

<<<<<<< HEAD
  useEffect(() =>{
    getGameInfo()
  },[selectedGame])  

//kode for lage favoritt  

  const savedFav = () => {
    const saved = localStorage.getItem("favoritt") 
    const initialValue = JSON.parse(saved) 
    return initialValue || "";
  }

  const [favourites, setFavourites] = useState(savedFav) 

  const addFavourite = () => {
    setFavourites((prev) => [...prev, selectedGame.name]) 
  }   

  useEffect(()=>{
    localStorage.setItem("favoritt", JSON.stringify(favourites))
  },[favourites]) 
  
console.log(favourites)

  return(
    <> 
    <h1>{selectedGame?.name}</h1>  
    <img src={gameInfo?.background_image} alt={selectedGame?.name}></img> 
    <p>Rating: {gameInfo?.rating}</p>   
    <p>Plot: {gameInfo?.description_raw}</p> 
    <p>Tags:</p> <ul>{gameInfo?.tags.map((t,i) => <li>{t.name}</li>)}</ul> 
    <p>Developers:</p> <ul>{gameInfo?.developers.map((d,i) => <li>{d.name}</li>)}</ul> 
    <p>Publisher:</p> <ul>{gameInfo?.publishers.map((p,i) => <li>{p.name}</li>)}</ul> 
    <p>Release: {gameInfo?.released}</p> 
    <p>Platforms:</p><ul>{gameInfo?.platforms.map((p,i) => <li>{p.platform.name}</li>)}</ul>  
    <p>Stores:</p> <ul>{gameInfo?.stores.map((s,i) => <li>{s.store.name}</li>)}</ul> 
    <button onClick={addFavourite}>add to favorites</button>
    </>
  )
} 

=======
  console.log(sanityGame)

    return( 
        <>
        <h2>{sanityGame?.game_title} </h2> 
        <p>Played: {sanityGame?.playtime} hours</p>    
        <p>Genre: {sanityGame?.genre}</p>
        
        </>
    )
}
>>>>>>> 044ac03ed514b0b58a62604927af4b6bdd8e53c5
