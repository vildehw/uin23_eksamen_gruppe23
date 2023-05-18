import MyGameCard from "./MyGameCard";

export default function MyGames({sanitygames, user}) { 

  console.log(sanitygames)
  return(
    <>
    <h1 id="mygames">MY GAMES</h1> 
    {user ? 
          <section id="games-section"> 
          <MyGameCard sanitygames={sanitygames} gamesAmount={10}/>
          </section> : 
          <p className="message">Log in to view your games</p>
    } 
    <a href="#header" className="go-top">Go to top</a>
    </>
  )
}