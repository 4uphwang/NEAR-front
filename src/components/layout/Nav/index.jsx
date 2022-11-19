import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from '../../../assets/NavLogo.png';

const Nav = () => {
    return(
        <div className="Nav">
            <div className="NavLogo">
                <img src={NavLogo} />
            </div>
            <div className="NavElement">
                <NavLink to="/" className={({isActive}) => (isActive ? "NavActive" : "NavDeactive")}>STORY</NavLink>
                <NavLink to="/labs" className={({isActive}) => (isActive ? "NavActive" : "NavDeactive")}>LABS</NavLink>
                <NavLink to="/game" className={({isActive}) => (isActive ? "NavActive" : "NavDeactive")}>GAME</NavLink>
                <NavLink to="/inventory" className={({isActive}) => (isActive ? "NavActive" : "NavDeactive")}>INVENTORY</NavLink>
            </div>
            <div className="NavConnect">
                <button className="NavConnectBtn">Connect Wallet</button>
            </div>
        </div>
    )
}

export default Nav;