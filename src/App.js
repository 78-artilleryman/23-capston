import React from "react";
import './App.css';
import { useEffect } from 'react';
import ChatGpt from  "./ChatGpt"
import Detailview from "./Detailview"
import Detail from "./Detail";
import MapContainer from "./MapContainer";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

import {Routes,Route,Link, BrowserRouter} from "react-router-dom";

// import Kakao from "./kakao/Kakao";


// import Home from "./pages/Home";
// import About from "./pages/About";
// import Counter from "./pages/Counter";
// import Input from "./pages/Input";
// import Input2 from "./pages/Input2";
// import List from "./pages/List";
//<Link> a 태그 같은것 사용하려면 임포트 두개 해야함
function App() {  

  


  return (
    <div className="App">
      <div className="mom">   
           <button className="sbtn" >start</button>
           <div className="Start">
      </div>
      </div>
      <MapContainer />
      <ChatGpt />
      <Link to="/detail"><Detailview/></Link>
    </div>
  );
}


export default App;
