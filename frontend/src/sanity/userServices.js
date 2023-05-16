
import { client } from "./client"

export const fetchAllUsers = async () => {
  const data = await client.fetch(`*[_type == "user"]{
    username, 
    email,   
    _id,
    games[]->{game_title, api_id, playtime, slug, genre[]->{genre_title},},
    favourites[]->{game_title, api_id, playtime, slug, genre[]->{genre_title}},  
}`)
  return data 
}



