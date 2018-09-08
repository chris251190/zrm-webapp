<template>
    <v-form>
        <section-title :title="title"/>
        <p class="subheading">{{wishelementquestion}}</p>
        <wish-elements-form-text-field v-for="(wishelement, index) in wishelements" :key="index" :wishelement="wishelement"/>
    </v-form>
</template>
<script>

    import WishElementsFormTextField from "./WishElementsFormTextField";
    import SectionTitle from "./SectionTitle";

    export default {
        name: 'wish-elements-form',
        components: {WishElementsFormTextField, SectionTitle},
        props: ['wishelements'],
        data() {
            return {
                title: 'Wunschelemente finden',
                wishelementquestion: 'Welches Wunschelement hat Eigenschaften, die dir dabei helfen, deine Absicht umzusetzen?',
            }
        },
    }
</script>
