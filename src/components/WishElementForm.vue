<template>
    <v-form v-model="valid">
        {{wishelementquestion}}
        <v-text-field v-for="(wishelement, index) in wishelements"
                      :key="index"
                      v-model="email"
                      :rules="emailRules"
                      :label="wishelement"
                      required/>
    </v-form>

</template>

<script>
    export default {
        name: 'WishElementForm',
        props: {
            msg: String
        },
        data() {
            return {
                wishelementquestion: 'Welches Wunschelement hat Eigenschaften, die dir dabei helfen, deine Absicht umzusetzen?',
                wishelements: [
                    'Tier',
                    'Pflanze',
                    'Landschaft',
                    'Person',
                    'Fantasiefigur',
                    'Fahrzeug',
                    'Anderes'
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
