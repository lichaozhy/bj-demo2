<template>
    <b-card :header="object.meta.name"
        class="widget">
        
        <slot />
    </b-card>
</template>

<script>
export default {
    props: ['object'],

}
</script>

<style>
.widget {
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    bottom: 5px;
}
</style>
