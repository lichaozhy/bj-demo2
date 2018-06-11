<template>
  <div id="app-page-desktop">
    <div id="desktop-grid">
      <desktop-grid />
    </div>

    <!-- <div id="desktop-menu">
    </div> -->

    <b-btn id="desktop-menu-button"
      size="sm"
      v-b-modal.desktopMenu
      variant="success">
      <font-awesome-icon icon="plus" fixed-width />
    </b-btn>
    
    <b-modal id="desktopMenu"
      button-size="sm"
      centered
      ok-only
      ok-title="好的"
      title="桌面控制面板" size="lg">
      <desktop-menu />
    </b-modal>
    
    <b-modal id="launch"
      button-size="sm"
      centered
      ok-only
      ok-title="好的"
      title="打开应用" size="sm">
      应用即将打开...
    </b-modal>
  </div>
</template>

<script>
import './widgets';
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
#app-page-desktop {
  background: url('../../../assets/desktop-bg.png');

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,.1);
  }
}

#desktop-menu-button {
  position: absolute;
  bottom: 15px;
  left: 15px;
}

#desktop-grid {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 15px;
  bottom: 15px;
}
</style>
