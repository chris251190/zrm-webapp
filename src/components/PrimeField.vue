<template>
    <v-text-field
            :label="primeText"
            required
            @change="handleChange"
    ></v-text-field>
</template>
<script>
    export default {
        name: 'prime-field',
        props: ['text'],
        computed: {
            // a computed getter
            primeText: function () {
                // `this` points to the vm instance
                return "Erinnerungshilfe " + this.text;
            }
        },
        methods: {
            handleChange(prime){
                this.$store.commit('addPrime', prime)
            }
        }
    }
</script>