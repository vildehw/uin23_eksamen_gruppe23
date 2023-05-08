import { client } from "./client"

export const fetchAllGenres = async () => {
    const data = await client.fetch(`*[_type == "genres"]`) 
    return data
} 


export const fetchGenre = async(genre) => {
    const data = await client.fetch(`*[_type == "genres" && genre_slug.current == $genre] 
    {genre_title, "games": 
      *[_type == "games" && category._ref == ^._id]
     {game_title,api_id,"slug": slug.current}
    }`, {genre}) 
    return data
}