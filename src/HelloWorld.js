import React from "react";
import './HelloWorld.css';
function HelloWorld(){
    return (
        React.createElement("div",{
            className: "container",
            onClick: () => console.log("Hello")
        },React.createElement("h2",null,"Hello"),React.createElement("p",null,"Boshqa so'zlar"),React.createElement("div",{
            className: "box"
        },React.createElement("span",null,"inner1"),React.createElement("span",null,"inner2")))
    )
}
export default HelloWorld