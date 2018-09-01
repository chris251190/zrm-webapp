<template>
    <v-form>
        {{wishelementquestion}}
        <v-text-field v-for="(wishelement, index) in wishelements"
                      :key="index"
                      :label="wishelement"
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
        }
    }
</script>
