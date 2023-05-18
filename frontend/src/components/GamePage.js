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

  //setter verdien til id, basert på om valgt spill er fra sanity eller api
  !selectedSanityGame ? id = apiId : id = sanityId

const [gameInfo, setGameInfo] = useState([]) 

//Henter info om et spesifikt spill basert på id. 
const getGameInfo = async(id) => {
  const response = await fetch (`https://api.rawg.io/api/games/${id}?key=1f72eed5f95849c9ace258ea29ce3390`)
  const data = await response.json()
  setGameInfo(data) 
}

  useEffect(() =>{
    getGameInfo(id) 
  },[selectedGame, selectedSanityGame])   
  
  //legger spill til array med brukerens favoritter
  const addFavourite = () => {   
   !userFav.includes(selectedSanityGame) ? setUserFav(prev => [...prev, selectedSanityGame]) : console.log("denne er allerede favoritt")
  }   
  
  console.log(sanityUser)
  console.log(selectedSanityGame)
 
// kode for verdier brukt i Tagcloud
 const gameTags = gameInfo?.tags?.map((t) => ({ value: t.name, count: t.games_count })) 
 console.log(gameTags)

 const colours = {
  hue: 'blue',  
  luminosity: 'bright'
 } 
 // kilder: https://madox2.github.io/react-tagcloud/ & https://github.com/davidmerfield/randomColor
  
// Array med pålogget brukers favoritter
 const favourites = sanityUser?.favourites
 // Array med id fra alle favoritt-spill
 const favouritesId = []
 // State som har en verdi på true dersom id på valt spill stemmer med en av id-ene i favoritt-spillene
 const [isFavourite, setIsFavourite] = useState(false)

 /* Funksjon som sjekker valgt spill er en favoritt. 
 * Sjekker om id på det valgte spillet finnes i en array av alle id-er fra favoritt-spill
 */
 function checkFavourite() {
  favourites?.map((f) => (favouritesId.push(f.api_id)))
  setIsFavourite(favouritesId?.includes(selectedSanityGame?.api_id))
 }

 useEffect(() => (
  checkFavourite()
 ), [selectedSanityGame])


 return(
  <>   
  <section id="gamepage-section"> 
    <h2>{selectedGame? selectedGame?.name : selectedSanityGame?.game_title}</h2>  

    <div id="btns">
      {sanityUser && selectedSanityGame && !isFavourite? <button id="fav-btn" onClick={addFavourite}>Add to favorites</button> : null }  
      {selectedSanityGame ? null : <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer"><button id="buy-btn">Buy game</button></a>}
    </div> 
  
  <img src={gameInfo?.background_image} alt={selectedGame?.name}></img>  
  
  <div id="grid-container-1">
    {selectedSanityGame ? <><h5>Played:</h5><p id="playtime">{selectedSanityGame?.playtime} hours</p></> : null } 
    <h5 id="genres">Genres:</h5> <ul className="GPlist">{selectedSanityGame ? selectedSanityGame?.genre.map((g,i) => <li key={`genre${i}`}>{g.genre_title}</li>) : selectedGame?.genres?.map((g,i) => <li key={`genre${i}`}>{g.name}</li>)}</ul>
    <h5>Rating:</h5><p id="rating">{gameInfo?.rating}</p>   
  </div> 
    
  <h5>Plot:</h5> <p id="gameplot">{gameInfo?.description_raw}</p> 
  <h5>Tags:</h5>
  <section id="tagcloud">
    {gameTags ? <TagCloud minSize={12} maxSize={40} tags={gameTags} colorOptions={colours} className="tagCloud"/> : null}
    
  </section>
 
  <div id="grid-container-2"> 
    <h5>Release:</h5> <p>{gameInfo?.released}</p>  
    <h5>Developers:</h5> <ul>{gameInfo?.developers?.map((d,i) => <li key={`developer${i}`}>{d.name}</li>)}</ul> 
    <h5>Publisher:</h5> <ul>{gameInfo?.publishers?.map((p,i) => <li key={`publisher${i}`}>{p.name}</li>)}</ul> 
    <h5>Platforms:</h5><ul>{gameInfo?.platforms?.map((p,i) => <li key={`platform${i}`}>{p.platform.name}</li>)}</ul>  
    <h5>Stores:</h5> <ul >{gameInfo?.stores?.map((s,i) => <li key={`store${i}`}>{s.store.name}</li>)}</ul>  
  </div> 
  </section>
  </> 
  
)
} 