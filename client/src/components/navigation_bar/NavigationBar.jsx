import React, { useState, useEffect} from "react";
import "./NavigationBar.css";

function Navigation_Bar(){

    const [thoughtInput, setThoughtInput] = useState("");

    function handleThoughtInputChange(evt){
        setThoughtInput(evt.target.value);
        console.log(evt.target.value);
    }

    return (
        <nav className="nav-bar">
            <a href="/"><img className="site-logo" src="/images/brand.png" alt="Site Logo"/></a>
            <ul className="nav-bar-ul">
                <li className="nav-bar-item">
                    Discover Hey
                </li>
                <form action="/createThought" method="post">
                    <input onChange={handleThoughtInputChange} value={thoughtInput} placeholder="What's in your Mind?" className="create-thought-input" type="text" name="thoughtInput" id=""/>
                </form>
            </ul>
        </nav>     
    );
}

export default Navigation_Bar;
