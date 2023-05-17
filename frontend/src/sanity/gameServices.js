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


export const fetchGameCount = async () => {
    const data = await client.fetch(`count(*[_type == "games"])`) 
    return data
} 



