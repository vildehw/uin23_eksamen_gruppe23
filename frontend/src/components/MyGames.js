import MyGameCard from "./MyGameCard";


export default function MyGames({sanitygames}) { 

  return(
    <>
    <section> 
    <h1>My games</h1> 
    <MyGameCard sanitygames={sanitygames} gamesAmount={10}/>
    </section>
    </>
  )
}