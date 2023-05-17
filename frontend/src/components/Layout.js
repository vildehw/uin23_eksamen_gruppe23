import { useEffect } from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import AC from "../logos/AC.jpeg";
import TM from "../logos/TM.png";

export default function Layout ({user, setUser, email, setEmail, setSanityUser, sanityUser}){

    // Funksjon som sjekker om mail i inputfelt stemmer overens med brukerens email

    function login() {
        if (email === "ann.c.karlsen@hiof.no"){
            setUser("Ann-Charlott")
        } else if ( email === "tore.m.akerbak@hiof.no"){
            setUser("Tore Marius")
        } else {console.log("feil epost")}
    } 

    useEffect(() => {
    login()
    }, [email])    
    
    /* Funksjon som logger ut bruker. Dersom en bruker er pålogget vil user og sanityUser 
    * bli satt til (""). Kjøres ved klikk på "sign out"
    */
    function logOut(){
       if(user){setUser("") 
        setSanityUser("")}
    }

    return (
        <>
        <header> 
            <Link to="/">
                <h1 id="logo">GameHub23</h1>
            </Link>
            <nav>
                <NavLink id="shop" className="nav-link" to="/gameshop"><i className="bi bi-shop"></i> Shop</NavLink> 
                <NavLink id="games" className="nav-link" to="/mygames"><i className="bi bi-house-door"></i> My games</NavLink>
                <NavLink id="favourites" className="nav-link" to="/favourites"><i className="bi bi-heart"></i> Favourites</NavLink> 
            </nav>
            <div>
            {user === "" ? null : <button id="sign-out" onClick={logOut}>SIGN OUT</button>}
            {user === "Ann-Charlott" || user === "Tore Marius" ?  <h3>{sanityUser?.username}</h3> : <Login user={user} setEmail={setEmail} email={email} login={login}/>}
            {user === "" ? <i id="icon" className="bi bi-person-circle"></i> : <img id="profile-img" alt="Profilbilde" src={user === "Ann-Charlott" ? AC : user === "Tore Marius" ? TM : ""}/>}
            </div>
        </header>  
        <main>
            <Outlet/>
        </main>
        <footer>
            <a href="https://rawg.io/apidocs" rel="noreferrer" target="_blank" >Games fetched with RAWG Video Games Database API (v1.0)</a>
            </footer>
        </>
    )
}