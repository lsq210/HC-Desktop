<template>
  <div>
    <div id="viewDiv"></div>
  </div>
</template>

<script>
/* eslint-disable */
import * as esriLoader from "esri-loader";
import testData from "./testdata";

export default {
  data() {
    return {
      mapView: null
    };
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
            portalItem: { id: "cd2c08450eb24ffc912bf7d097c4db8d" }
          });
          this.mapView = new MapView({
            map: webmap,
            container: "viewDiv"
          });

          // alert(testData[0].value[2])
          for (var i = 0; i < testData.length; i++) {
            var color = [128, 0, 255, 0.3];
            var outlineWidth = 1;
            var outlineColor = [128, 0, 255, 0.75];
            var size = testData[i].value[2] / 5;
            this.addPoint(
              testData[i].value[0],
              testData[i].value[1],
              size,
              color,
              outlineWidth,
              outlineColor
            );
          }
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    },
    addPoint(lng, lat, size, color, outlineWidth, outlineColor) {
      esriLoader
        .loadModules(["esri/Graphic", "dojo/domReady!"])
        .then(([Graphic]) => {
          // First create a point geometry (this is the location of the Titanic)
          var point = {
            type: "point", // autocasts as new Point()
            longitude: lng,
            latitude: lat
          };

          // Create a symbol for drawing the point
          var markerSymbol = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: color,
            size: size,
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
