<template>
    <div>
        <section-title :title="title"/>
    </div>
</template>

<script>
    import SectionTitle from "./SectionTitle";

    export default {
        name: "embodiment",
        components: {SectionTitle},
        data() {
            return {
                title: 'Embodiment erarbeiten'
            }
        }
    }
</script>

<style scoped>

</style>