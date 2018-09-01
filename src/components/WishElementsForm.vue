<template>
    <v-form>
        {{wishelementquestion}}
        <v-text-field v-for="(wishelement, index) in wishelements"
                      :key="index"
                      :label="wishelement"
                      @change="handleChange"
                      required/>
    </v-form>
</template>
<script>

    export default {
        name: 'wish-elements-form',
        props: ['wishelements'],
        data() {
            return {
                wishelementquestion: 'Welches Wunschelement hat Eigenschaften, die dir dabei helfen, deine Absicht umzusetzen?',
            }
        },
        methods: {
            handleChange: function(){
                alert("Test");
            }
        }
    }
</script>
