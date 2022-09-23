<template>
        <Html />
        <Css />
        <Vue />
</template>

<script>
// import components
import Html from "./Html.vue"
import Css from "./Css.vue"
import Vue from "./Vue.vue"

export default {
    name: "Code",
    components: {
        Html,
        Css,
        Vue
    }
}
</script>