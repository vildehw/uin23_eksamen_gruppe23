import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function Layout (){
    return (
        <>
        <header> 
            <Link to="/">
                <h1>Gamehub</h1> 
            </Link>
        </header>  
        <nav>
            <NavLink to="/gameshop">Gameshop</NavLink> 
            <NavLink to="/favourites">My favorites</NavLink> 
            <NavLink to="/mygames">My games</NavLink>
        </nav>
        <main>
            <Outlet/>
        </main>
        </>
    )
}