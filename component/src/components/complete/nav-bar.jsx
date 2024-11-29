import { useState } from "react"

export default function NavBar({showMenu,onChange}){
    const [search,setSearch] = useState("");
    return showMenu ? (
        <nav className="nav-cont">
        <div>
        <ul className="link-cont">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        </div>
        <div className="search-cont">
            <input value={search} onChange={(e)=>{
                setSearch(e.target.value)
                onChange(e.target.value)
            }} type="search" name="" id="" />
            <div><img src="" alt="name" /></div>
        </div>
       
    </nav>
    ) : null
}