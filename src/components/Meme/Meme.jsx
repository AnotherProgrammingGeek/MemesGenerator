import React, { useEffect, useState } from "react";
import memesData from "../../memesData";
export default function Meme(props){


  
  let [memeObj, setMemeObj] = useState({
    topText : "",
    botomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  });
  let [allMeme, setallMeme] = useState(memesData)
  
  useEffect(()=> {
    async function get_memes (){
      const response = await fetch("https://api.imgflip.com/get_memes")
        const data = await response.json()
          setallMeme(data.data.memes)
        }
        get_memes()
    },[])
  
    function handleChange (event) {
      const {name,value} = event.target
      setMemeObj(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
    }
  
    function newMemeImage(){
       let random = (allMeme[Math.floor(Math.random() * allMeme.length)]);
       
       setMemeObj(prevMeme => ({
        ...prevMeme,
        randomImage: random.url
       }));
    }

  return (
    <main>
      <div className="form">
        <label className="form--Lable" htmlFor="form--toptxt">Top text</label>
        <input 
          id="form--toptxt" 
          type="text" 
          placeholder="Shut up"
          name="topText"
          value= {memeObj.topText}
          onChange= {handleChange}
        />
        <label className="form--Lable" htmlFor="form--bottomtxt">Bottom text</label>
        <input 
          id="form--bottomtxt" 
          type="text" 
          placeholder="And take my money" 
          name="botomText"
          value={memeObj.botomText}
          onChange={handleChange}

        />
        <button className="form--btn" onClick={newMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme--imageWrap">
        <img src={memeObj.randomImage} alt="pix" className="meme--imageWrap--image"/>
        <h2 className="meme--imageWrap--txt top">{memeObj.topText}</h2>
        <h2 className="meme--imageWrap--txt bottom">{memeObj.botomText}</h2>
      </div>

      
    </main>
  )
};
