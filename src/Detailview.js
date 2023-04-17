import React from "react";
import './Detailview.css';
import sample from "./sample.jpg"
import Detail from "./Detail";
import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import App from "./App";
const Detailview = () =>{
    

    return(
        <div>
             <App></App>
        <div className='detailv'>
            <img src={sample}></img>
            <h1>제목</h1>
            <p>대한 맺어, 피고 내는 피다. 그들의 가장 얼마나 뜨고, 일월과 꾸며 별과 사막이다. 우리 청춘의 반짝이는 위하여서 싸인 힘있다. 타오르고 구하지 되려니와, 그것은 현저하게 온갖 원대하고, 웅대한 같지 사막이다. 인류의 넣는 밝은 청춘에서만 보라. 인간의 이상의 살 과실이 그리하였는가? 평화스러운 더운지라 이것은 풍부하게 되려니와, 인도하겠다는 구하기 그러므로 위하여서. 청춘의 넣는 없으면 이상은 커다란 무한한 것이다. 얼마나 찾아다녀도, 갑 그러므로 청춘의 하여도 불어 천하를 것은 말이다.

            찾아다녀도, 인간은 긴지라 사막이다. 것은 속잎나고, ...
            </p>


        </div>
        </div>





    )
}
export default Detailview;