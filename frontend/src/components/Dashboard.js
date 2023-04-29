import GameCard from "./GameCard";

export default function Dashboard() {
  return(
    <>
      <div className="section-headline">
        <h2>GameShop</h2>
        <button>Visit shop</button>
      </div>
      <section id="gameshop-window">
        <GameCard />
        <GameCard />
        <GameCard />
      </section>
      <section id="my-games-section">
        <section>
          <div className="section-headline">
          <h2>MY GAMES-LIBRARY - 21 games</h2>
          </div>
          <article className="gamecard">
            <div className="poster">
            </div>
            <div className="game-info">
              <h3>Title</h3>
              <h4>Genre</h4>
              <p>Hours played: 96</p>
            </div>
            <button>Go to library</button>
          </article>
        </section>
        <section id="favourites-section">
          <div className="section-headline">
          <h2>MY FAVOURITES</h2>
          </div>
          <button>Go to favourites</button>
        </section>
      </section>
    </>
  )
}

//Bytte ut individuelle article tags med tre spill, satte det opp sånn her foreløpig for å fikse designet