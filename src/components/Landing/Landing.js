import React, { useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import  './Landing.css';
import Image1 from './flood1.jpeg';
import Image2 from './flood3.jpg';
import Image3 from './flood4.jpg';
import Image4 from './flood7.jpg';


export default function Landing() {

    useEffect(() => {
        // Init Materialize JS
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, { duration: 300 , fullWidth: true, indicators: true, shift: 5});

        // var instance = M.Materialbox.init(elems);
        // var elens = document.querySelectorAll('.materialboxed');

        
          
    });

   

    return(

        
        <div className="carousel carousel-slider center">
        <div className="carousel-fixed-item center">
          <a className="btn waves-effect black grey-text darken-text-2">LOGIN</a>
        </div>
        <div className="carousel-item black-text"  href="#one!">
          <h2>First Panel</h2>
         
          <img src={ Image1 } alt="Kerala Floods"/>
          <p className="black-text">This is your first panel</p>
         
        </div>
        <div className="carousel-item black-text" href="#two!">
          <h2>Second Panel</h2>
          <img src={ Image2 } alt="Kerala Floods"/>
          <p className="white-text">This is your second panel</p>
        </div>
        <div className="carousel-item black-text" href="#three!">
          <h2>Third Panel</h2>
          <img src={ Image3 }  alt="Kerala Floods"/>
          <p className="white-text">This is your third panel</p>
        </div>
        <div className="carousel-item black-text" href="#four!">
          <h2>Fourth Panel</h2>
          <img src={ Image4 }   alt="Kerala Floods"/>
          <p className="white-text">This is your fourth panel</p>
        </div>
      </div>
      
            




    );
};
