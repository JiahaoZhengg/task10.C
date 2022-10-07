import React from "react";
import './Ender.css';

function Ender() {
    return (
        <div className="header">
            <div className="deakin"><h1>SIGN UP FOR OUR DAILY INSIDER</h1></div>
            <form className="input" method="post" action="http://localhost:4242/sendemail">
                <input type="text" placeholder="Enter your email" className="email" name="email" />
                <button className="sub" type="submit"> Subscribe</button>
            </form>
        </div>
    )
}

export default Ender