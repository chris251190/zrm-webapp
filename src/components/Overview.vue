<template>
    <div>
        <section-title :title="title"/>

        <v-layout row wrap v-for="(prime, index) in primes" :key="index">
            <v-flex>
                {{prime}}
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import SectionTitle from "./SectionTitle";

    export default {
        name: "overview",
        components: {SectionTitle},
        data() {
            return {
                title: 'Übersicht zum Ausdrucken',
                primes: this.$store.state.primes
            }
        }
    }
</script>

<style scoped>

</style>