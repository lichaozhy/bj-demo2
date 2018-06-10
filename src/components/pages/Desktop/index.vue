<template>
  <div id="app-page-desktop">
    <div id="desktop-grid">
      <desktop-grid />
    </div>

    <div id="desktop-menu">
      <desktop-menu />
    </div>
  </div>
</template>

<script>
import DesktopGrid from './utils/Grid';
import DesktopMenu from './utils/Menu';

const MOCK = {
  ALL_APP_META_LIST: [],
  SORTED_APP_LIST: [],
  WIDGET_LAYOUT_LIST: []
};

export default {
  name: 'AppDesktop',
  components: {
    DesktopGrid,
    DesktopMenu
  }
}
</script>

<style lang="less">
#desktop-menu {
  background-color: #ccc;
  height: 200px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

#desktop-grid {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 15px;
  bottom: 15px;
}
</style>
