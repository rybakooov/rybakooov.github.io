$(document).ready(function(){
  
  $(document).on('click', '.faq-item-top', function(){
    $(this).parent().toggleClass('faq-item_open')
    $(this).parent().find('.faq-item-main').slideToggle();
  })


  if($('#main-map').length){
    ymaps.ready(init);
    function init(){
      // Создание карты.
      var myMap = new ymaps.Map("main-map", {
          center: [57.623229, 39.856246],
          zoom: 16,
          controls: ['zoomControl']
      });


      myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [57.623229, 39.856246]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconContent: 'Travel Workshop'
        }},{
          // Опции.
          // Иконка метки будет растягиваться под размер ее содержимого.
          preset: 'islands#blackStretchyIcon'
        });
        
      myMap.geoObjects.add(myGeoObject);
    }
    
  }
  

  function resizer() {
    //$('.tours-wrap-item').height($('.tours-wrap-item').width());
  }
  resizer();


  $(window).resize(function(){
    resizer();
  })
});