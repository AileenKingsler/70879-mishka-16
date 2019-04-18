ymaps.ready(init);
var myMap, myPlacemark;
function init () {
  myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323055],
    zoom: 17,
    controls: []
  });
  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {

  }, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-pin.svg",
    iconImageSize: [66, 101],
    iconImageOffset: [-33, -101]
  });
  myMap.geoObjects.add(myPlacemark);
}
