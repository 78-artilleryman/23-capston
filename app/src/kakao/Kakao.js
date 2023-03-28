// /* global kakao */
// import React, { useEffect, useState } from 'react';

// const { kakao } = window;

// const MapTest = () => {
//     const [map,setMap] = useState(null);

//     //처음 지도 그리기
//     useEffect(()=>{
//         const container = document.getElementById('map');
//         const options = { center: new kakao.maps.LatLng( 36.92052565009346 , 127.60832932139819 ),
//         level:15 };
//         const kakaoMap = new kakao.maps.Map(container, options);
//         setMap(kakaoMap);
//     },[])

//     return (
//         <div
//             style={{
//                 width: '100%',
//                 height:'100vh',
//                 display: 'inline-block',
//             }}
//         >
//             <div id="map" style={{ width: '99%', height: '500px' }}></div>
//         </div>
//     );
// };
// export default MapTest;