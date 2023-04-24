import { Outlet } from "react-router";

export default function Layout (){
    return (
        <>
        <header>
            <h1>Gamehub</h1>
        </header> 
        <main>
            <Outlet/>
        </main>
        </>
    )
}