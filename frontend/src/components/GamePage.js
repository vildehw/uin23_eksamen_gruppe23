import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { TagCloud } from 'react-tagcloud'

export default function GamePage({games, sanitygames, sanityUser, setUserFav, userFav}) {
 
  const {slug} = useParams()

  const selectedSanityGame = sanitygames?.find((game) => game?.slug.current === slug) 
  const sanityId = selectedSanityGame?.api_id  

  const selectedGame = games?.find((game) => game?.slug === slug) 
  const apiId = selectedGame?.id 

  let id = '' ;

  !selectedSanityGame ? id = apiId : id = sanityId

 
const [gameInfo, setGameInfo] = useState([]) 


const getGameInfo = async(i) => {
  const response = await fetch (`https://api.rawg.io/api/games/${i}?key=880241c0a7e24864aef2b9d1687af70d`)
  const data = await response.json()
  setGameInfo(data) 
}

  useEffect(() =>{
    getGameInfo(id) 
  },[selectedGame, selectedSanityGame])   
  
  const addFavourite = () => {   
   !userFav.includes(selectedSanityGame) ? setUserFav(prev => [...prev, selectedSanityGame]) : console.log("denne er allerede favoritt")
  }   
  
  console.log(selectedSanityGame)
 
 const gameTags = gameInfo?.tags?.map((t) => ({ value: t.name, count: t.games_count })) 
 console.log(gameTags)

 const colours = {
  hue: 'blue',  
  luminosity: 'bright'
 } 
 // kilder: https://madox2.github.io/react-tagcloud/ & https://github.com/davidmerfield/randomColor
  
  return(
    <>  
    <h2>{selectedGame? selectedGame?.name : selectedSanityGame?.game_title}</h2>   
    <section>
    <img id="GPimg" src={gameInfo?.background_image} alt={selectedGame?.name}></img>   
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
    {selectedSanityGame ? null : <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer"><button>Buy</button></a>}
    {sanityUser && selectedSanityGame ? <button className="button" onClick={addFavourite}>add to favorites</button> : null }

    <article>
    {gameTags ? <TagCloud minSize={12} maxSize={40} tags={gameTags} colorOptions={colours} className="tagCloud"/> : null}
    </article>
    </section>
    </> 
    
  )
} 