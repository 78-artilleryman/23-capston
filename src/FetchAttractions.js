const { kakao } = window;

export default function FetchAttractions(areaCode, setAttractions) {
    
    const apiUrl = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=8KMplgYAN9tgVfx%2FsZORv4WoX%2F88eLq8oL28%2BZeSzQMxMVkFbTV2SEcvjdnP82q26yb8snTbG7HSgOYeZYO1mw%3D%3D&numOfRows=1000&contentTypeId=12&areaCode=${areaCode}&sigunguCode=&cat1=A01&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&_type=json`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const items = data.response.body.items.item;
        const attractiondict = items
          .filter((attraction) => attraction.mapx)
          .map((attraction) => {
            const content = {
              title: attraction.title,
              latlng: new kakao.maps.LatLng(attraction.mapy, attraction.mapx),
              addr1: String(attraction.addr1),
              tel: attraction.tel ? String(attraction.tel) : '',
              firstimage: String(attraction.firstimage),
            };
            return content;
          });
        setAttractions(attractiondict);
      });
  }