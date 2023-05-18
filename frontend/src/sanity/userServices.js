
import { client } from "./client"

export const fetchAllUsers = async () => {
  const data = await client.fetch(`*[_type == "user"]{
    username, 
    email,   
    _id,
    mygames[]->{game_title, api_id, playtime, slug, genre[]->{genre_title}, image_url},
    favourites[]->{game_title, api_id, playtime, slug, genre[]->{genre_title}, image_url},  
}`) 
//kilde for å hente array med nøkler: https://www.sanity.io/docs/query-cheat-sheet
  return data 
}



