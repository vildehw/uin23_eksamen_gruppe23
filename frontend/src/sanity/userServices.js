import { client } from "./client"

export const fetchWishlist = async () => {
  const data = await client.fetch(`*[_type === "user"] {
    wishlist
  }`)
  return data
}