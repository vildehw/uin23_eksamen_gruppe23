import {client} from './client' 

//Service for å hente alle produkter
export const fetchAllGames = async () => {
    const data = await client.fetch(`*[_type == "games"]`) 
    return data
} 


//Service for å hente et bestemt produkt, basert på :slug 
export const fetchGame = async (slug) => {
    const data = await client.fetch(`
    *[_type == "games" && slug.current == $slug]
    {game_title, api_id, hours_played, "catname":category->category_title}
    `, {slug}) 
    return data
} 

//variabler i groq bruker kun $ foran 
//sende variabler fra kode til groq spørringen {slug} fra react, sende med inn som parameter