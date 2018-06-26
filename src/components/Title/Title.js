import React from "react";
import mainLogo from "./fidget.png"
import "./Title.css";

const Title = props => <div className="title">

<h1><span><img src={mainLogo} alt="nothing" className="fidget"/></span>Try Cozing Through This<span><img src={mainLogo} alt="nothing" className="fidget"/></span></h1>
<h4>Remember to Always Strive and Prosper</h4>
<h6>...OR Just Fidget Away</h6>
{props.children}
</div>;


export default Title;
