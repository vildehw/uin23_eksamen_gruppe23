import MyGameCard from "./MyGameCard";

export default function MyGames({sanitygames}) { 

  console.log(sanitygames)
  return(
    <>
    <h1 id="mygames">MY GAMES</h1> 
    <section id="games-section"> 
    <MyGameCard sanitygames={sanitygames} gamesAmount={10}/>
    </section>
    </>
  )
}