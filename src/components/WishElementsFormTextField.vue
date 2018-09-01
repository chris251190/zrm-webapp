<template>
    <v-text-field
            :label="wishelement"
            @change="handleChange"
            v-model="value"
            required/>
</template>
<script>
    export default {
        name: 'wish-elements-form-text-field',
        methods: {
            handleChange: function () {
                alert(this.value);
            }
        },
        props: ['wishelement'],
        data() {
            return {
                value: ''
            }
        }
    }
</script>