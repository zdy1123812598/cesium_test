<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: 'Demo',
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
      selectionIndicator: false// 是否显示选取指示器组件
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
  }
}
</script>

<style scoped>
  .cesiumContainer {
    width: 100%;
    height: 100%;
  }
</style>
