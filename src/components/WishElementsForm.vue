<template>
    <v-form>
        {{wishelementquestion}}
        <wish-elements-form-text-field v-for="(wishelement, index) in wishelements" :key="index" :wishelement="wishelement"/>
    </v-form>
</template>
<script>

    import WishElementsFormTextField from "./WishElementsFormTextField";

    export default {
        name: 'wish-elements-form',
        components: {WishElementsFormTextField},
        props: ['wishelements'],
        data() {
            return {
                wishelementquestion: 'Welches Wunschelement hat Eigenschaften, die dir dabei helfen, deine Absicht umzusetzen?',
            }
        },
    }
</script>
