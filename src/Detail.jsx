import React from "react";
import { useEffect, useRef, useState } from 'react';
import "./Detail.scss";
import { useNavigate } from "react-router-dom";
import sample1 from "./sample.jpg";
import sample2 from "./sample.jpg";
import sample3 from "./sample.jpg";
import sample4 from "./sample.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "@react-icons/all-files/fa/FaBeer";




const Detail = () =>{
  useEffect(() => {
    // 수행할 함수
  
    const items = document.querySelectorAll('.slider-item');
    const itemCount = items.length;
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    const navItem = document.querySelector('a.toggle-nav');
    let count = 0;

    
    function showNextItem() {
      items[count].classList.remove('active');
    
      if(count < itemCount - 1) {
        count++;
      } else {
        count = 0;
      }
    
      items[count].classList.add('active');
      console.log(count);
    }
    
    function showPreviousItem() {
      items[count].classList.remove('active');
    
      if(count > 0) {
        count--;
      } else {
        count = itemCount - 1;
      }
    
      items[count].classList.add('active');
      // Check if working...
      console.log(count);
    }
    
    function toggleNavigation(){
      this.nextElementSibling.classList.toggle('active');
    }
    
    function keyPress(e) {
      e = e || window.event;
      
      if (e.keyCode =='37') {
        showPreviousItem();
      } else if (e.keyCode == '39') {
        showNextItem();
      }
    }
    
    nextItem.addEventListener('click', showNextItem);
    previousItem.addEventListener('click', showPreviousItem);
    document.addEventListener('keydown', keyPress);
    navItem.addEventListener('click', toggleNavigation);
  
  });
    return(
      
    //   <div id = "root">
        
    //   <nav className="flex-nav">
    //     <div className="container">
    //       <div className="grid">
    //         <div className="column-xs-9 column-md-8">
    //           <p id="logo">Japan<span id="highlight">.</span></p>
    //         </div>
    //         <div class="column-xs-3 column-md-4">
    //           <a href="#" class="toggle-nav">Menu <i class="ion-navicon-round"></i></a>
    //           <ul>
    //             <li><a href="#">Abodybout</a></li>
    //             <li><a href="#">Discover</a></li>
    //             <li><a href="#">Plan Your Trip</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    // </nav>
    //   <main className="intro-section">
    //     <div className="container">
    //       <div className="grid">
    //         <div className="column-xs-12">
    //           <ul className="slider">
    //             <li className="slider-item active">
    //               <div className="grid vertical">
    //                 <div className="column-xs-12 column-md-2 hide-mobile">
    //                   <div className="intro">
    //                     <a href="#">
    //                       <h1 className="title"><span className="underline">Explore Tokyo</span></h1>
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="column-xs-12 column-md-10">
    //                   <div className="image-holder">
    //                     <img src={sample1} />
    //                   </div>
    //                   <div className="grid">
    //                     <div className="column-xs-12 column-md-9">
    //                       <div className="intro show-mobile">
    //                         <a href="#">
    //                           <h1 className="title"><span className="underline">Explore Tokyo</span></h1>
    //                         </a>
    //                       </div>
    //                       <p className="description">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="slider-item">
    //               <div className="grid vertical">
    //                 <div className="column-xs-12 column-md-2 hide-mobile">
    //                   <div className="intro">
    //                     <a href="#">
    //                       <h1 className="title"><span className="underline">Explore Kyoto</span></h1>
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="column-xs-12 column-md-10">
    //                   <div className="image-holder">
    //                     <img src={sample2}/>
    //                   </div>
    //                   <div className="grid">
    //                     <div className="column-xs-12 column-md-9">
    //                       <div className="intro show-mobile">
    //                         <a href="#">
    //                           <h1 className="title"><span className="underline">Explore Kyoto</span></h1>
    //                         </a>
    //                       </div>
    //                       <p className="description">Kyoto is famous for its numerous classNameical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="slider-item">
    //               <div className="grid vertical">
    //                 <div className="column-xs-12 column-md-2 hide-mobile">
    //                   <div className="intro">
    //                     <a href="#">
    //                       <h1 className="title"><span className="underline">Explore Osaka</span></h1>
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="column-xs-12 column-md-10">
    //                   <div className="image-holder">
    //                     <img src={sample3}/>
    //                   </div>
    //                   <div className="grid">
    //                     <div className="column-xs-12 column-md-9">
    //                       <div className="intro show-mobile">
    //                         <a href="#">
    //                           <h1 className="title"><span className="underline">Explore Osaka</span></h1>
    //                         </a>
    //                       </div>
    //                       <p className="description">Osaka is a large port city and commercial center known for its modern architecture, nightlife and hearty street food.</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="slider-item">
    //               <div className="grid vertical">
    //                 <div className="column-xs-12 column-md-2 hide-mobile">
    //                   <div className="intro">
    //                     <a href="#">
    //                       <h1 className="title"><span className="underline">Explore Hokkaido</span></h1>
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="column-xs-12 column-md-10">
    //                   <div className="image-holder">
    //                     <img src={sample4}/>
    //                   </div>
    //                   <div className="grid">
    //                     <div className="column-xs-12 column-md-9">
    //                       <div className="intro show-mobile">
    //                         <a href="#">
    //                           <h1 className="title"><span className="underline">Explore Hokkaido</span></h1>
    //                         </a>
    //                       </div>
    //                       <p className="description">Hokkaido, the northernmost of Japan s main islands, is known for its volcanoes, natural hot springs ("onsen") and ski areas.</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //           </ul>
    //         <div className="grid">
    //           <div className="column-xs-12">
    //             <div className="controls">
    //                 <button className="previous"/>
    //                 <a><span className="visually-hidden">Previous</span>
    //                   <span className="icon arrow-left" aria-hidden="true"></span>
    //                 </a>
    //                 <button className="next"/>
    //                 <a><span className="visually-hidden">Next</span>
    //                   <span className="icon arrow-right" aria-hidden="true"></span>
    //                 </a>
    //               </div>
    //             </div>
    //         </div>

    //       </div>
    //     </div>
        
    //     </div>
        
    //     </main>

    //     </div>
    
      <html lang="en">
        <head>
        <meta charset="utf-8" />
        </head>
              <body>
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
<div class="intro-section">
  <div class="container">
    <div class="grid">
      <div class="column-xs-12">
        <ul class="slider">
          <li class="slider-item active">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                  <a href="#">
                    <h1 class="title"><span class="underline">Explore Tokyo</span></h1>
                  </a>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                  <img src={sample1}/>
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <a href="#">
                        <h1 class="title"><span class="underline">Explore Tokyo</span></h1>
                      </a>
                    </div>
                    <p class="description">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slider-item">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                  <a href="#">
                    <h1 class="title"><span class="underline">Explore Kyoto</span></h1>
                  </a>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                <img src={sample1}/>
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <a href="#">
                        <h1 class="title"><span class="underline">Explore Kyoto</span></h1>
                      </a>
                    </div>
                    <p class="description">Kyoto is famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slider-item">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                  <a href="#">
                     <h1 class="title"><span class="underline">Explore Osaka</span></h1>
                  </a>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                <img src={sample1}/>
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <a href="#">
                        <h1 class="title"><span class="underline">Explore Osaka</span></h1>
                      </a>
                    </div>
                    <p class="description">Osaka is a large port city and commercial center known for its modern architecture, nightlife and hearty street food.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slider-item">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                  <a href="#">
                    <h1 class="title"><span class="underline">Explore Hokkaido</span></h1>
                  </a>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                <img src={sample1}/>
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <a href="#">
                        <h1 class="title"><span class="underline">Explore Hokkaido</span></h1>
                      </a>
                    </div>
                    <p class="description">Hokkaido, the northernmost of Japan’s main islands, is known for its volcanoes, natural hot springs ("onsen") and ski areas.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      <div class="grid">
        <div class="column-xs-12">
          <div class="controls">
              <button class="previous" />
                <a><span class="visually-hidden">Previous</span>
                <span class="AiOutlineArrowLeft" aria-hidden="true"></span>
              </a>
              <button class="next" />
                <a><span class="visually-hidden">Next</span>
                <span class="AiOutlineArrowRight" aria-hidden="true"></span>
                </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</div> 
      
      </body>
      <script async src="./Dj.js"></script>        

      
      </html>
      

    )
    
}


export default Detail