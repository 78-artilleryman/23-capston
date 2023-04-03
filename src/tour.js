const express = require('express');
const axios = require('axios');
const app = express();

const baseURL = 'http://apis.data.go.kr/B551011/KorService1';
const apiPath = '/areaBasedList1';
const queryParams = '?ServiceKey=8KMplgYAN9tgVfx%2FsZORv4WoX%2F88eLq8oL28%2BZeSzQMxMVkFbTV2SEcvjdnP82q26yb8snTbG7HSgOYeZYO1mw%3D%3D&contentTypeId=12&areaCode=1&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&_type=json'; 
const url = baseURL + apiPath + queryParams;

axios.get(url)
  .then(response => {
    const attractions = response.data.response.body.items.item;
    console.log(attractions);
  })
  .catch(error => {
    console.error(error);
  });



// 프론트엔드로부터 요청을 받는 endpoint 설정
app.get('/tourist-attractions', async (req, res) => {
  try {
    // 요청 쿼리 파라미터에서 위도와 경도 가져오기
    const { lat, lng } = req.query;

    // 한국관광공사 open API에 요청을 보내서 위도와 경도를 쿼리 파라미터로 전달
    const response = await axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList', {
      params: {
        ServiceKey: '8KMplgYAN9tgVfx%2FsZORv4WoX%2F88eLq8oL28%2BZeSzQMxMVkFbTV2SEcvjdnP82q26yb8snTbG7HSgOYeZYO1mw%3D%3D',
        mapX: lng,
        mapY: lat,
        radius: 5000,
        numOfRows: 10,
        arrange: 'B',
        contentTypeId: '12',
        MobileOS: 'ETC',
        MobileApp: 'AppTest',
        _type: 'json'
      }
    });

    // 응답에서 관광지 데이터 추출하고 프론트엔드에서 쉽게 사용할 수 있는 형식으로 포맷팅
    const touristAttractions = response.data.response.body.items.item.map(item => {
      return {
        name: item.title,
        address: item.addr1,
        image: item.firstimage,
        description: item.overview,
        latitude: item.mapy,
        longitude: item.mapx
      };
    });

    // 포맷팅된 데이터를 JSON 응답으로 프론트엔드에 전송
    res.json(touristAttractions);
  } catch (error) {
    console.error(error);
    res.status(500).send('오류가 발생했습니다');
  }
});
