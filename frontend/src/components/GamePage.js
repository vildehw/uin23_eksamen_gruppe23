import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { updateFavourites, updateWishlist } from "../sanity/userServices"
import { TagCloud } from 'react-tagcloud'

export default function GamePage({games, sanitygames, favourites, setFavourites, user, sanityUser}) {
 
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
   !favourites.includes(gameInfo) ? setFavourites(prev => [...prev, gameInfo]) : console.log("denne er allerede favoritt")
  }   
  
  //lagre favoritter i sanity
  const addSanityFav = async() => { 
    const name = selectedSanityGame?.game_title 
    const gameId = sanityId 
    const userId = `drafts.${sanityUser._id}`
  
    const result = await updateFavourites (name, gameId, userId) 
    console.log('addSanityFav') 
    console.log(result)
    return result
  }

// Lagrer spill til Sanity
const addWishlist = async (e) => {
  const name =  selectedGame?.name 
  const gameId = selectedGame?.id 
  const userId = `drafts.${sanityUser._id}`
  e.preventDefault()
  const result = await updateWishlist(name, gameId, userId)
  return result
}

// Kilde for å legge data inn i sanity fra brukergrensesnittet: https://webtricks.blog/oppdatere-et-array-felt-i-en-innholdstype-i-sanity-fra-et-react-grensesnitt/ 

 
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
    {selectedSanityGame ? null : <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer"><button>Buy</button></a>}
    {selectedSanityGame ? <button className="button" onClick={sanityUser? addSanityFav : addFavourite}>add to favorites</button> : <button className="button" onClick={addWishlist}>add to wishlist</button>}
    <article>
    {//{gameTags ? <TagCloud minSize={12} maxSize={40} tags={gameTags} colorOptions={colours} className="tagCloud"/> : null}
}
    </article>
    </> 
    
  )
} 