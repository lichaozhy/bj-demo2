<template>
  <div id="app-page-desktop">
    <div id="desktop-grid">
      <desktop-grid />
    </div>
    
    <div id="desktop-siderbar">
      
      <b-button-group vertical size="lg">
        <b-btn variant="link">
          <font-awesome-icon icon="cog" fixed-width />
        </b-btn>
        <b-btn variant="link">
          <font-awesome-icon icon="cubes" fixed-width />
        </b-btn>
        <b-btn variant="link">
          <font-awesome-icon icon="window-maximize" fixed-width />
        </b-btn>
        <b-btn variant="link">
          <font-awesome-icon icon="rss-square" fixed-width />
        </b-btn>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import DesktopGrid from './utils/Grid';

const MOCK = {
  ALL_APP_META_LIST: [],
  SORTED_APP_LIST: [],
  WIDGET_LAYOUT_LIST: []
};

export default {
  name: 'AppDesktop',
  components: {
    DesktopGrid
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
#desktop-siderbar {
  background-color: #ccc;
  color: #fff;
  height: 100%;
  position: absolute;
  left: 0;
  min-width: 40px;
}

#desktop-grid {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 15px;
  bottom: 15px;
}
</style>
