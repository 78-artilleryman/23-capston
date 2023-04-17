import React from "react";
import './App.css';
import { useEffect } from 'react';
import ChatGpt from  "./ChatGpt"
import Detailview from "./Detailview"
import Detail from "./Detail";
import Clcik from "./click.png";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

import {Routes,Route,Link, BrowserRouter} from "react-router-dom";
import MapContainer from "./MapContainer";


function App() {  
    useEffect(()=>{
    const spanEl = document.querySelector("div label span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); 
      if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
      }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
  });

  return (
    <div className="App">

 

                 <input className="sbtn" id="Sb" type="checkbox" value="TRAVEL"/>
                 <label for="Sb">TRAVEL<img className="click"src={Clcik}></img>
</label>

      <div className="Start">   
      <div id="Name">Wanderer</div>
        <label className="active" id="IF"><span className="BB" ></span></label>

      </div>
      <MapContainer/>
      <ChatGpt />
      {/* <Link to="/detail"><Detailview/></Link>  */}


      
    </div>
  );
}


export default App;
