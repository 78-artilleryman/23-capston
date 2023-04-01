// Import necessary modules
const axios = require('axios');


// Set up the Kakao Map API
const container = document.getElementById('map');
const options = {
  center: new kakao.maps.LatLng(37.5665, 126.9780),
  level: 10,
};
const map = new kakao.maps.Map(container, options);

// Set up the Korea Tourism Information Service API endpoint
const endpoint = 'http://apis.data.go.kr/B551011/KorService1';

// Set up the request parameters for the Korea Tourism Information Service API
const params = {
  ServiceKey: '8KMplgYAN9tgVfx%2FsZORv4WoX%2F88eLq8oL28%2BZeSzQMxMVkFbTV2SEcvjdnP82q26yb8snTbG7HSgOYeZYO1mw%3D%3D',
  numOfRows: 10,
  pageNo: 1,
  MobileOS: 'ETC',
  MobileApp: 'AppTest',
  arrange: 'A',
  cat1: 'A01',
  areaCode: 1,
  sigunguCode: 0,
  contentTypeId: 12,
  listYN: 'Y',
};

// Make a request to the Korea Tourism Information Service API
axios.get(endpoint, { params })
  .then((response) => {
    const attractions = response.data.response.body.items.item;
    // Loop through the attractions and add markers to the map
    attractions.forEach((attraction) => {
      const latLng = new kakao.maps.LatLng(attraction.mapy, attraction.mapx);
      const marker = new kakao.maps.Marker({
        position: latLng,
        map,
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });