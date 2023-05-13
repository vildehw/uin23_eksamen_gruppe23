import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function GamePage({games, sanitygames}) {
 
const {slug} = useParams()


const selectedGame = games?.find((game) => game?.slug === slug) 
const id = selectedGame?.id 

const selectedSanityGame = sanitygames?.find((game) => game?.slug.current === slug) 
const sanityId = selectedSanityGame?.api_id   



const [gameInfo, setGameInfo] = useState([]) 


  const getGameInfo = async(i) => {
    const response = await fetch (`https://api.rawg.io/api/games/${i}?key=880241c0a7e24864aef2b9d1687af70d`)
    const data = await response.json()
    setGameInfo(data) 
  }

  useEffect(() =>{
    getGameInfo(id)
  },[selectedGame])   

  useEffect(() =>{
    getGameInfo(sanityId)
  },[selectedSanityGame])  

  

//kode for å lagre favoritt  (localstorage)

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

console.log(selectedGame) 
console.log(selectedSanityGame)
console.log(gameInfo) 


  return(
    <>  
   
    <h2>{selectedGame? selectedGame?.name : selectedSanityGame?.game_title}</h2>   

    <img src={gameInfo?.background_image} alt={selectedGame?.name}></img>   
    {selectedSanityGame ? <p>Played: {selectedSanityGame?.playtime} hours</p> : null } 
    <p>Genres: </p> <ul>{selectedSanityGame ? selectedSanityGame?.genre.map((g,i) => <li>{g.genre_title}</li>) : selectedGame?.genres?.map((g,i) => <li>{g.name}</li>)}</ul>
    
    <p>Rating: {gameInfo?.rating}</p>   
    <p>Plot: {gameInfo?.description_raw}</p> 
    <p>Tags:</p> <ul>{gameInfo?.tags?.map((t,i) => <li>{t.name}</li>)}</ul> 
    <p>Developers:</p> <ul>{gameInfo?.developers?.map((d,i) => <li>{d.name}</li>)}</ul> 
    <p>Publisher:</p> <ul>{gameInfo?.publishers?.map((p,i) => <li>{p.name}</li>)}</ul> 
    <p>Release: {gameInfo?.released}</p> 
    <p>Platforms:</p><ul>{gameInfo?.platforms?.map((p,i) => <li>{p.platform.name}</li>)}</ul>  
    <p>Stores:</p> <ul>{gameInfo?.stores?.map((s,i) => <li>{s.store.name}</li>)}</ul> 
    <button className="button" onClick={addFavourite}>add to favorites</button>
  
    
    </>
  )
} 