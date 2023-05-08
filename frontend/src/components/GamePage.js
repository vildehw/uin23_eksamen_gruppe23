import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function GamePage({games}) { 

  const {slug} = useParams()  
  
  const selectedGame = games.find((g) => g.slug === slug) 
  
  const id = selectedGame?.id   

  console.log(id)
  const [gameInfo, setGameInfo] = useState(null) 

  const getGameInfo = async() => {
    const response = await fetch (`https://api.rawg.io/api/games/${id}?key=880241c0a7e24864aef2b9d1687af70d`)
    const data = await response.json()
    setGameInfo(data) 
    console.log(gameInfo)
  }

  useEffect(() =>{
    getGameInfo()
  },[selectedGame])


  return(
    <> 
    <h1>{selectedGame?.name}</h1>  
    <img src={gameInfo?.background_image} alt={selectedGame?.name}></img> 
    <p>Rating: {gameInfo?.rating}</p>   
    <p>Genre:</p> <ul>{gameInfo?.genres.map((g,i) => <li>{g.name}</li>)}</ul>
    <p>Plot: {gameInfo?.description_raw}</p> 
    <p>Tags:</p> <ul>{gameInfo?.tags.map((t,i) => <li>{t.name}</li>)}</ul> 
    <p>Developers:</p> <ul>{gameInfo?.developers.map((d,i) => <li>{d.name}</li>)}</ul> 
    <p>Publisher:</p> <ul>{gameInfo?.publishers.map((p,i) => <li>{p.name}</li>)}</ul> 
    <p>Release: {gameInfo?.released}</p> 
    <p>Platforms:</p><ul>{gameInfo?.platforms.map((p,i) => <li>{p.platform.name}</li>)}</ul>  
    <p>Stores:</p> <ul>{gameInfo?.stores.map((s,i) => <li>{s.store.name}</li>)}</ul> 
    <button>add to favorites</button>
    </>
  )
} 

/* 
Bilde
Rating
Oppsummering/plot
Stikkord (tags)
Utviklere (developers)
Utgiver (publisher)
Utgivelsesår (release)
Plattformer (platforms)
Kjøpsmuligheter (stores)  

*/