import React from "react";

export default function Header(props){
  return (
    <header>
            <img className="header--image" src= {"https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"} alt="troll Face" />
            <h1 className="header--title">Meme Generator</h1>
            <h3 className="header--contactMe">memet.murad@mail.ru</h3>
    </header>
  )
};
