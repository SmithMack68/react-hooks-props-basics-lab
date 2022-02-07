import React from "react";
import Links from "./Links"

function About(props) { 
  let bioline
  if(!props.bio){
    bioline = null
  } else { 
    bioline = <p>{props.bio}</p>
}
    return(
    <div id="about">
      <h2>About Me</h2>
      {bioline}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.links} linkedin={props.links.linkedin} github={props.links.github}
      /> 
    </div>
  );
}

export default About;
