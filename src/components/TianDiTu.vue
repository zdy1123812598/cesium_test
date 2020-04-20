<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: 'TianDiTu',
  data () {
    return {}
  },
  mounted () {
    let Cesium = this.Cesium
    var viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      baseLayerPicker: true,
      geocoder: true,
      timeline: false,
      sceneModePicker: true,
      navigationHelpButton: false,
      infoBox: true,
      fullscreenButton: false,
      vrButton: true,
      homeButton: false,
      selectionIndicator: false
    })

    viewer._cesiumWidget._creditContainer.style.display = 'none' // 去掉左下角那个不可爱的图标

    // viewer.extend(Cesium.viewerCesiumInspectorMixin);         //那些个特效
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(111.07, 39.05, 20000000),
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: Cesium.Math.toRadians(0) // heading、pitch和roll就是镜头相对于xyz轴的角度，比如pitch为-90°而另外两个为0时，就是90°向下俯视地球。
      }
    })

    /* // arcgis影像
    viewer.scene.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
      url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
    })) */
    /* // 高德街道
   viewer.scene.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
     url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
     layer: 'tdtVecBasicLayer',
     style: 'default',
     format: 'image/png',
     tileMatrixSetID: 'GoogleMapsCompatible',
     show: false
   })) */
    /* // 高德街道
  viewer.scene.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
    url: 'http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8',
        layer: 'tdtAnnoLayer',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'GoogleMapsCompatible'
  })) */
    /* // 高德街道
  viewer.scene.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
    url: 'http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        layer: 'tdtVecBasicLayer',
        style: 'default',
        format: 'image/png',
        tileMatrixSetID: 'GoogleMapsCompatible',
        show: false
  })) */
    /* // 天地图卫星影像
   viewer.scene.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
      url: 'http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles',
      layer: 'tdtImgBasicLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
      show: false
    })) */
    /* //天地图注记图层
    viewer.scene.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
      url: 'http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles',
      layer: 'tdtImgAnnoLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
      show: false
    })) */
  }

}
</script>

<style scoped>
  .cesiumContainer {
    position: absolute;
    width: 300px;
    height: 400px;
  }
</style>
