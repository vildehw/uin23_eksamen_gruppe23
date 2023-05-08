import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function Layout (){
    return (
        <>
        <header> 
            <Link to="/">
                <img src="logos/1x/macslogo_white.png" alt="MAC's gamehub"/>
            </Link>
            <nav>
                <NavLink className="nav-link" to="/gameshop">Shop</NavLink> 
                <NavLink className="nav-link" to="/mygames">My games</NavLink>
                <NavLink className="nav-link" to="/favourites">Favorites</NavLink> 
            </nav>
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