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

  console.log(sanityGame)

    return( 
        <>
        <h2>{sanityGame?.game_title} </h2> 
        <p>Spilltid: {sanityGame?.playtime}</p>    
        <p>Sjanger: {sanityGame?.genre}</p>
        
        </>
    )
}