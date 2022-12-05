import React from "react"
function About(){
    // return(
    //     <div><h1>Nee Abba Codered raa</h1></div>
    // )
    return React.createElement("div",
    {id:"about",className:"aboutClass"},
    React.createElement("h1",null,"About page"))
}
export default About