<template>
    <v-text-field
            v-model="name"
            :label="primeText"
            required
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
        }
    }
</script>