import React from "react";
import App from "./App";
import { useEffect } from 'App';

const MarkClick = () =>{
    // 클릭 이벤트 관리
    
    var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true;
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    })
    kakao.maps.event.addListener(marker, 'click', function() {
     // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);  
    })
    return(
        <div>

        </div>
    )
}

export default MarkClick
