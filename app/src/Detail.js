import React from "react";
import './Detail.scss';
import { Tween,TweenMax ,Power2} from "gsap/gsap-core";
const initialSlide = () =>{('.slides-container [data-order="1"]')};
const initalSelected = () =>{('.slide-navigation__txt [data-order="1"]')};
const mq_medium = window.matchMedia( '(min-width: 860px)' );
const mq_big = window.matchMedia( '(min-width: 1200px)' );

const Detail = () =>{
    return(
      <nav class="flex-nav">
      <div class="container">
        <div class="grid">
          <div class="column-xs-9 column-md-8">
            <p id="logo">Japan<span id="highlight">.</span></p>
          </div>
          <div class="column-xs-3 column-md-4">
            <a href="#" class="toggle-nav">Menu <i class="ion-navicon-round"></i></a>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Discover</a></li>
              <li><a href="#">Plan Your Trip</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    )
}

export default Detail