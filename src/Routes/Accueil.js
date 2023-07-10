
import '../index.css';
import React, { useEffect, useState } from "react";


export default function Accueil() {

  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch('https://api.storyblok.com/v2/cdn/stories/image?version=draft&token=cyEGQa57ApxhswSDgNkQHQtt&cv=1688920710');
    const data = await res.json();
    const imageUrl = data.story.content.image;
    
    setImg(imageUrl);
  };
  
  useEffect(() => {
    fetchImage();
  }, []);
  

  return (
    <>
      <div className="fullscreen-bg">

    {img && <img src={img} alt="wallpaper accueil" className='charles'/>}

      <div className="centered-text">
        <h1 className='title-splash'>Charles Cantin</h1>
        <h1 className='title-splash'>Photographe</h1>
      </div>
    </div>
    </>
  );
}

