import React from "react";
import "./Nav.css";

const Nav = (props) => (
    <nav>
   
   
    <nav className="navbar navbar-expand-md">
    <li id="score">Current Score: {props.score} </li>

   
   
    <div className="navbar-collapse collapse" id="collapsingNavbar">
   
    <div className="mx-auto order-0">
    <li id="winlose">{props.winlose} </li>
    </div>
        <ul className="navbar-nav ml-auto">
            <li id="top">
                Top Score: {props.topScore}
            </li>
        </ul>
    </div>
</nav>
   
   
   
   
   
   
   
   
   
   
   
   
  
    </nav>
)

export default Nav;

