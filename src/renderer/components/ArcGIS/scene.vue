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
      sceneView: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      esriLoader
        .loadModules([
          "esri/views/SceneView",
          "esri/Map",
          "esri/Graphic",
          "esri/layers/GraphicsLayer",
          "dojo/domReady!"
        ])
        .then(([SceneView, Map, Graphic, GraphicsLayer]) => {
          var map = new Map({
            basemap: "streets"
          });

          this.sceneView = new SceneView({
            container: "viewDiv",
            map: map,

            camera: {
              // autocasts as new Camera()
              position: {
                // autocasts as new Point()
                x: 104.3,
                y: 28.7,
                z: 20000000
              },
              heading: 0,
              tilt: 0
            }
          });

          /*********************
           * Add graphics layer
           *********************/

          var graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

          /*************************
           * Add a 3D point graphic
           *************************/

          for (var i = 0; i < testData.length; i++) {
            var point = {
              type: "point", // autocasts as new Point()
              x: testData[i].value[0],
              y: testData[i].value[1],
              z: 0
            };

            var markerSymbol = {
              type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
              color: [128, 0, 255, 0.5],
              size: testData[i].value[2] / 5,
              outline: {
                // autocasts as new SimpleLineSymbol()
                color: [128, 0, 255, 0.75],
                width: 2
              }
            };

            var pointGraphic = new Graphic({
              geometry: point,
              symbol: markerSymbol
            });

            graphicsLayer.add(pointGraphic);
          }
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
