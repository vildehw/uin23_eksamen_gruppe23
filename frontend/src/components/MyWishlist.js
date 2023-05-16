import GameCard from "./GameCard";

export default function MyWishlist() {
  return(
    <>
    <h1 id="wishlist">WISHLIST</h1>
    <section>
    <GameCard gamesAmount={10}/>
    </section>
    </>
  )
}