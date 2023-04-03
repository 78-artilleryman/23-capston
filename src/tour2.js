require('dotenv').config();
const express = require('express');
const axios = require('axios');
const Kakao = require('kakaojs');
const app = express();
const kakao = new Kakao({
  apiKey: process.env.KAKAO_API_KEY,
});

const KTO_API_KEY = process.env.KTO_API_KEY;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', function(req, res) {
  const { lat, lng } = req.query;
  axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${KTO_API_KEY}&mapX=${lng}&mapY=${lat}&radius=5000&arrange=A&listYN=Y`).then(response => {
    const items = response.data.response.body.items.item;
    const markers = items.map(item => {
      return {
        title: item.title,
        latlng: new kakao.maps.LatLng(item.mapY, item.mapX),
      };
    });
    res.json(markers);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});