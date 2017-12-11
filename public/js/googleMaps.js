
lugar = ""
function googleMaps(lat,lng) {
    var marker, i;
    var crd;
    var map;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){

            var loc;
            // Problem: lat,lng can't get position.coords to pass to map out of natvigator function, so I needed to add map into and markers too.
            if(lat == null) loc = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            else loc = new google.maps.LatLng(lat,lng);

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: loc,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });


            marker = new google.maps.Marker({ // Marcador do User
                position: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                map: map,
                icon: 'http://maps.google.com/mapfiles/kml/pal3/icon32.png'
            });

           
            for(i = 0; i < locations.length; i++){ // Marcadores base
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: icons[locations[i][3]][0]
                });
            }

            var data = localStorage.getItem("info").split(",");
            for(i = 0; i < data.length/6; i++){ // Marcador added
                  marker = new google.maps.Marker({
                      position: new google.maps.LatLng( data[2 + i * 6],  data[3 + i * 6]),
                      map: map,
                      icon: 'http://maps.google.com/mapfiles/kml/pal4/icon39.png'
                  });
            }
           



        });
    }
    var infowindow = new google.maps.InfoWindow();
}
function testResults(){
   var x = document.getElementById("frm1");
       var text = [];
       var i;
       for (i = 0; i < x.length-1 ;i++) {
           //console.log(i + ' = ' + x.elements[i].value);
           if(i == 2 || i == 3){
               text[i+2] = x.elements[i].value;
               text[i] = i == 2 ? lugar.position.lat():lugar.position.lng()

           }
           else
               text[i] = x.elements[i].value;
       }
       for(i = 0; i < 6; i++){
           console.log('text[' + i + '] = ' + text[i]);
       }
       update(text);
       console.log(locations[i]);
}


