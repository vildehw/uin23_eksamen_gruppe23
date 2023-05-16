import { writeClient } from "./client"
import { client } from "./client"

export const fetchAllUsers = async () => {
  const data = await client.fetch(`*[_type == "user"]{
    username, 
    email,   
    _id,
    games[]->{game_title, api_id, playtime, slug, genre[]->{genre_title},},
    favourites[]->{game_title, id, playtime, slug, genre[]->{genre_title}},  
    
}`)
  return data 
}

export async function updateWishlist(name, gameId, userId) {
  const result = await writeClient.patch(userId)
  .setIfMissing({wishlist: []})
  .append("wishlist", [{title: name, id: gameId}])
  .commit({autoGenerateKeys: true})
  .then(() => {return "Successfully added game to wishlist!"})
  .catch((err) => {return "Failed to save game to wishlist: " + err.message})

  return result
} 

export async function updateFavourites(name, gameId, userId) {
  const result = await writeClient.patch(userId)
  .setIfMissing({favourites: []})
  .append("favourites", [{title: name, id: gameId}])
  .commit({autoGenerateKeys: true})
  .then(() => {return "Game added to favourites successfully!"})
  .catch((err) => {return "Game save to favourites failed: " + err.message})

  return result
} 

// Kilde for å legge data inn i sanity fra brukergrensesnittet: https://webtricks.blog/oppdatere-et-array-felt-i-en-innholdstype-i-sanity-fra-et-react-grensesnitt/ 
