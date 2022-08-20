import React from 'react';
import './Navbar.css';
import Search from '../Search/Search';
import { NavLink } from 'react-router-dom';

const Navbar = ({ darkTheme, setDarkTheme, stat, setStat }) => {
    console.log("Stat", stat);
    return (
        <>
            {stat ? <div className='Navbar'>
                <button className={`Nav--btn1 bg${darkTheme ? "-d" : ""}`}>
                    <a href='https://drive.google.com/open?id=1OVTmrWgM2B8SAmTo3V65ZaSMdmX8VmVy&authuser=raohuraira331.rb%40gmail.com&usp=drive_fs' 
                    rel='noreferrer' target='_blank'>Download App</a>
                </button>
                <button className={`Nav--btn bg${darkTheme ? "-d" : ""}`} onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? "Light-Mode" : "Dark-Mode"}
                </button>
                <h1 className={`Nav--Title bg${darkTheme ? "-d" : ""}`}>Senpai</h1>
                <Search darkTheme={darkTheme} stat={stat} setStat={setStat} />
            </div > :
                <div className="Navbar-S">
                    <NavLink to={'/'} className={`NavS--Title bg${darkTheme ? "-d" : ""}`} onClick={() => setStat(true)}><h1>Senpai</h1></NavLink>
                    <div className='NavS--Search'>
                        <Search darkTheme={darkTheme} />
                    </div>
                    <button className={`Nav--btn bg${darkTheme ? "-d" : ""}`} onClick={() => setDarkTheme(!darkTheme)}>
                        {darkTheme ? "Light-Mode" : "Dark-Mode"}
                    </button>
                </div>}
        </>
    )
}

export default Navbar;