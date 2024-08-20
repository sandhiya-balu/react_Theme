import React, { createContext, useState } from 'react';
import './Hello.css';
import { FaSchool } from 'react-icons/fa';
import { BsToggleOn } from 'react-icons/bs';
import Hello from './Hello';




export const colorContext = createContext()

const Logo = () => {
    const [theme, setTheme] = useState('light');
    

    const head = {
        height: "80px",
        display: "flex",
        backgroundColor: theme === 'light' ? "#cacafc" : "#4b0fd6",
        color: theme === 'light' ? "black" : "white",
    };

    const right1 = {
        display: "flex",
        position: "fixed",
        right: "10px",
        padding: "12px",
    };

    const left1 = {
        paddingLeft: "17px",
        paddingTop: "15px",
        display: "flex",
    };

    const title = {
        fontSize: "20px",
        marginLeft: "15px",
        marginTop: "9px",
        letterSpacing: "1px",
        fontWeight: "600",
    };

    const toggle = {
        padding: "10px",
        cursor: "pointer",
    };

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.body.className = theme === 'light' ? 'dark-theme' : 'light-theme';
    };

    return (
        <div style={head}>
            <div style={left1}>
                <FaSchool size={28} />
                <p style={title}>MED SCHOOL</p>
            </div>
            <div style={right1}>
                <div className="navigate1">Home</div>
                <div className="navigate1">Contact</div>
                <BsToggleOn style={toggle} size={25} onClick={toggleTheme} />
            </div>

            <colorContext.Provider value={theme}>
            <Hello val={theme}/>
                 
            </colorContext.Provider>
        </div>
    );
};

export default Logo;
