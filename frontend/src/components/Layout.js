import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import logo from "../logos/1x/macslogo_white.png";
import AC from "../logos/AC.jpeg";
import TM from "../logos/TM.png";
import { fetchAllUsers } from "../sanity/userServices";

export default function Layout ({user, setUser, email, setEmail, setSanityUser, sanityUser}){

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
    
    function logOut(){
       if(user){setUser("") 
        setSanityUser("")}
    }


    //             <img src={logo} alt="MAC's gamehub"/>
    return (
        <>
        <header> 
            <Link to="/">
                <h1 id="logo">GameHub23</h1>
            </Link>
            <nav>
                <NavLink id="shop" className="nav-link" to="/gameshop">Shop</NavLink> 
                <NavLink id="games" className="nav-link" to="/mygames">My games</NavLink>
                <NavLink id="favourites" className="nav-link" to="/favourites">Favorites</NavLink> 
                <NavLink id="wishlist" className="nav-link" to="/wishlist">Wishlist</NavLink> 
            </nav>
            <div>
            {user === "Ann-Charlott" || user === "Tore Marius" ?  <h3>{sanityUser?.username}</h3> : <Login user={user} setEmail={setEmail} email={email} login={login}/>}
            {user === "" ? <i id="icon" className="bi bi-person-circle"></i> : <img id="profile-img" alt="Profilbilde" src={user === "Ann-Charlott" ? AC : user === "Tore Marius" ? TM : ""}/>}
            </div>
        </header>  
        <main>
            <Outlet/>
            {user === "" ? null : <button onClick={logOut}>SIGN OUT</button>}
        </main>
        <footer>
            <a href="https://rawg.io/apidocs" rel="noreferrer" target="_blank" >Games fetched with RAWG Video Games Database API (v1.0)</a>
            </footer>
        </>
    )
}