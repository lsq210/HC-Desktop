<template>
  <div class="map-container">
    <ArcGISScene></ArcGISScene>
  </div>
</template>
<script>
import ArcGISScene from '@/components/ArcGIS/scene'

export default {
  name: 'arcgisscene',
  components: { ArcGISScene }
}
</script>

<style scoped>
.map-container{
  position: relative;
  padding: 20px;
  width: 100%;
  height: 87.65vh;
  background-color: #eee;
  z-index:0;
}
</style>

