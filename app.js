<script src="paypal-button.min.js?merchant=YOUR_MERCHANT_ID"
    data-button="buynow"
    data-name="My product"
    data-amount="1.00"
    async
></script>
var geoLocate = new LocateButton({
  map: map,
  highlightLocation: false
  }, "LocateButton"
);
geoLocate.startup();
Code

<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no">
  <title>Locate Button</title>
  <link rel="stylesheet" href="https://js.arcgis.com/3.16/esri/css/esri.css">
  <style>
    html, body, #map {
      padding:0;
      margin:0;
      height:100%;
    }
    #LocateButton {
      position: absolute;
      top: 95px;
      left: 20px;
      z-index: 50;
    }
  </style>
  <script src="//js.arcgis.com/3.16/"></script>
  <script>
    var map; 

    require([
      "esri/map", 
      "esri/dijit/LocateButton",
      "dojo/domReady!"
    ], function(
      Map, LocateButton
    )  {

      map = new Map("map", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "streets"
      });
            
      geoLocate = new LocateButton({
        map: map
      }, "LocateButton");
      geoLocate.startup();

    });
  </script>
</head>
<body>
  <div id="map" class="map">
    <div id="LocateButton"></div>
  </div>
</body>
</html>
 
