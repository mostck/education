( function( $ ) {
  $(document).ready(function() {
    var latlon = new google.maps.LatLng(50.4319814, 30.4288769);
    var mapholder = document.getElementById("mapholder");
    mapholder.style.height = '350px';
    mapholder.style.width = '100%';

    var myOptions = {
      center:latlon,zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      mapTypeControl:false,
      navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }

    var map = new google.maps.Map(mapholder, myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
  });
} )( jQuery );

