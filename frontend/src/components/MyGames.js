import MyGameCard from "./MyGameCard";


export default function MyGames({sanitygames}) { 

  console.log(sanitygames)
  return(
    <>
    <h1>MY GAMES</h1> 
    <section> 
    <MyGameCard sanitygames={sanitygames} gamesAmount={10}/>
    </section>
    </>
  )
}