<template>
    <div>
        Overview
        <span v-for="(prime, index) in primes" :key="index"><br/>{{prime}}</span>
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