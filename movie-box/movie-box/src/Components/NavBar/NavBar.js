import React from "react";
import './NavBar.css'
function NavBar(){
    return (
    <div className="navbar_container">
        <img 
        className="navbar_logo" 
        src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-blue-movie-video-tool-image_1229852.jpg"
        alt="Logo"/>
        <button className="navbar_button">Sign In</button>
    </div>
    );
}
export default NavBar;