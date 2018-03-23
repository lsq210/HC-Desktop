<template>
  <div>
    <div id="viewDiv"></div>
  </div>
</template>

<script>
/* eslint-disable */
import * as esriLoader from "esri-loader";

export default {
  data() {
    return {
      mapView: null
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      esriLoader
        .loadModules([
          "esri/views/MapView",
          "esri/WebMap",
          "esri/Graphic",
          "dojo/domReady!"
        ])
        .then(([MapView, WebMap, Graphic]) => {
          // then we load a web map from an id
          let webmap = new WebMap({
            portalItem: { id: "52af2de6ca974954b2d800da88dd8f70" }
          });
         this.mapView = new MapView({
            map: webmap,
            container: "viewDiv"
          });

          // 添加小圆圈
          var addPoints = [
            {
              lng: 114,
              lat: 34.5,
              size: 9,
              color: [226, 119, 40],
              outlineWidth: 2,
              outlineColor: [255, 255, 255]
            },
            {
              lng: 150,
              lat: 34.5,
              size: 9,
              color: [226, 119, 40],
              outlineWidth: 2,
              outlineColor: [255, 255, 255]
            }
          ];

          for (var i = 0; i < addPoints.length; i++) {
            this.addPoint(
              addPoints[i].lng,
              addPoints[i].lat,
              addPoints[i].size,
              addPoints[i].color,
              addPoints[i].outlineWidth,
              addPoints[i].outlineColor
            );
          }
         
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    },
     // 函数定义
         addPoint(lng, lat, size, color, outlineWidth, outlineColor) {
            esriLoader
        .loadModules([
          "esri/Graphic",
          "dojo/domReady!"
        ]).then(([Graphic]) => {
            // First create a point geometry (this is the location of the Titanic)
            var point = {
              type: "point", // autocasts as new Point()
              longitude: lng,
              latitude: lat,
              size: size
            };

            // Create a symbol for drawing the point
            var markerSymbol = {
              type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
              color: color,
              outline: {
                // autocasts as new SimpleLineSymbol()
                color: outlineColor,
                width: outlineWidth
              }
            };

            // Create a graphic and add the geometry and symbol to it
            var pointGraphic = new Graphic({
              geometry: point,
              symbol: markerSymbol
            });

            // Add the graphics to the view's graphics layer
            this.mapView.graphics.addMany([pointGraphic]);
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
          }
    
  }
};
</script>
<style scoped>
@import url("https://js.arcgis.com/4.4/esri/themes/light/main.css");
#viewDiv {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
