import {client} from './client' 


export const fetchAllGames = async () => {
    const data = await client.fetch(`*[_type == "games"] {
        game_title, 
        api_id, 
        playtime, 
        slug, 
        genre[]->{genre_title},  
        image_url
    }`) 
    return data
}  
//kilde for å hente array med nøkler: https://www.sanity.io/docs/query-cheat-sheet

export const fetchGameCount = async () => {
    const data = await client.fetch(`count(*[_type == "games"])`) 
    return data
}  
//kilde for groq-count: https://www.sanity.io/docs/query-cheat-sheet



