import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function GamePage({games}) { 

  const {slug} = useParams()  
  
  const selectedGame = games.find((g) => g.slug === slug) 
  //console.log(selectedGame)
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
    

      <p>Plot: {gameInfo?.description_raw}</p>
   
    <img></img> 
    <p>rating: {selectedGame?.rating}</p>

    </>
  )
}