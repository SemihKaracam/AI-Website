import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.svg"
import { useState } from "react";
const Navbar = () => {
    const [menu, setMenu] = useState(true)
    return (
        <div className="navbar">
            <div className="nav-links-container">
                <h3 className="nav-logo">GPT-3</h3>

                <ul className="nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">What is GPT?</a></li>
                    <li><a href="">OPEN AI</a></li>
                    <li><a href="">Case Studies</a></li>
                    <li><a href="">Library</a></li>
                </ul>
            </div>
            <div className="nav-buttons">
                <div className="sign">
                    <button className="signin-btn">Sign in</button>
                    <button className="signup-btn">Sign up</button>
                </div>
                <div className="menu-container">
                    {menu ? <RiMenu3Line onClick={() => setMenu(false)} className="menu-icon" /> : <RiCloseLine onClick={() => setMenu(true)} className="close-icon" />}
                    {
                        !menu &&

                        (
                            <div className="menu-nav-links-btns scale-up-center">
                                <ul className="menu-nav-links">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">What is GPT?</a></li>
                                    <li><a href="">OPEN AI</a></li>
                                    <li><a href="">Case Studies</a></li>
                                    <li><a href="">Library</a></li>
                                </ul>
                                <div className="menu-nav-btns">
                                    <button className="menu-signin-btn">Sign in</button>
                                    <button className="signup-btn">Sign up</button>
                                </div>
                            </div>
                        )



                    }
                </div>

            </div>

        </div>
    )
}


export default Navbar