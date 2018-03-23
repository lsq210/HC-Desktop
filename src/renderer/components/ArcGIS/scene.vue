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
        .then(([SceneView, WebMap, Graphic, GraphicsLayer]) => {
          var map = new Map({
            basemap: "hybrid"
          });

          this.sceneView = new SceneView({
            container: "viewDiv",
            map: map,

            camera: {
              // autocasts as new Camera()
              position: {
                // autocasts as new Point()
                x: -0.17746710975334712,
                y: 51.44543992422466,
                z: 1266.7049653716385
              },
              heading: 0.34445102566290225,
              tilt: 82.95536300536367
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

          // London
          var point = {
            type: "point", // autocasts as new Point()
            x: -0.178,
            y: 51.48791,
            z: 0
          };

          markerSymbol = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: [226, 119, 40],
            size: 100,
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: [255, 255, 255],
              width: 2
            }
          };

          var pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol
          });

          graphicsLayer.add(pointGraphic);
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
