<template>
    <div>
        <v-layout row wrap>
                Overview
        </v-layout>

        <v-layout row wrap v-for="(prime, index) in primes" :key="index">
            <v-flex>
                {{prime}}
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "overview",
        data() {
            return {
                primes: this.$store.state.primes
            }
        }
    }
</script>

<style scoped>

</style>