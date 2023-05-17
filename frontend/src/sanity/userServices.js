
import { client } from "./client"

export const fetchAllUsers = async () => {
  const data = await client.fetch(`*[_type == "user"]{
    username, 
    email,   
    _id,
    mygames[]->{game_title, api_id, playtime, slug, genre[]->{genre_title}, image_url},
    favourites[]->{game_title, api_id, playtime, slug, genre[]->{genre_title}, image_url},  
}`)
  return data 
}



