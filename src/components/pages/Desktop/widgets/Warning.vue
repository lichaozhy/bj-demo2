<template>
    <widget :object="object">
		<b-alert show variant="warning" dismissible>
			具有良好的用户使用体验(UI设计)，包括但不限于上述模块。
		</b-alert>
    </widget>
</template>

<script>
import Widget from '../utils/renderer/Widget.vue';

export default {
    components: {
        Widget
    },
    props: ['object']
}
</script>


<style lang="less">

</style>
