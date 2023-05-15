import { writeClient } from "./client"

export async function updateWishlist(name, gameId, userId) {
  const result = await writeClient.patch(userId)
  .setIfMissing({wishlist: []})
  .append("wishlist", [{title: name, id: gameId}])
  .commit({autoGenerateKeys: true})
  .then(() => {return "Game added to wishlist successfully!"})
  .catch((err) => {return "Game save to wishlist failed: " + err.message})

  return result
}