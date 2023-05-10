import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import MyGameCard from "./MyGameCard";

export default function Dashboard({games, sanitygames}) {
  return(
    <>
      <div className="section-headline">
        <h2>GameShop</h2>
        <Link to="/gameshop"><button>Visit shop</button></Link>
      </div>
      <section id="gameshop-window">
        <GameCard games={games} gamesAmount={3}/>
      </section>
      <section id="my-games-section">
        <section>
          <div className="section-headline">
          <h2>MY GAMES-LIBRARY - 10</h2>
          </div>
          <MyGameCard sanitygames={sanitygames} gamesAmount={4}/>
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

/*
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

          */