<template>
    <b-card :header="object.meta.name"
        class="h-100">
        
        <slot />
    </b-card>
</template>

<script>
export default {
    props: ['object'],

}
</script>
