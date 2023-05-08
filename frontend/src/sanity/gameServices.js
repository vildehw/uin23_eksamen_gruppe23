import {client} from './client' 


export const fetchAllGames = async () => {
    const data = await client.fetch(`*[_type == "games"]`) 
    return data
} 



export const fetchGame = async (slug) => {
    const data = await client.fetch(`
    *[_type == "games" && slug.current == $slug]
    {game_title, api_id, playtime, "genre":genre->genre_title}
    `, {slug}) 
    return data
} 