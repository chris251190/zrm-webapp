<template>
    <div>
        <p class="subheading">{{text}}</p> <p class="title">{{motto}}</p>

        <p class="body-1">{{primesText}}</p>

        <v-form v-model="valid">
            <PrimeField v-for="(number, index) in numbers" :key="index" v-bind:text="number"/>
        </v-form>
    </div>
</template>

<script>
    import PrimeField from "./PrimeField";

    export default {
        name: "primes",
        components: {PrimeField},
        data() {
            return {
            text: 'Dein Mottoziel ist fertig und lautet: ',
                primesText: 'Um dein Mottoziel zu stärken, brauchst du noch Erinnerungshilfen: Diese können alles mögliche sein ' +
                    'wie ein neues Passwort, ein Schlüsselanhänger, ein neues Hintergrundbild für dein Handy oder ein neues Kleidungsstück' +
                    ' beispielsweise. Die Hauptsache ist, dass es neu ist und dich an dein Mottoziel erinnert. Für den Anfang werden 5 Erinnerungshilfen' +
                    ' empfohlen.',
                numbers: ['1', '2', '3', '4', '5'],
            }
        },
        computed: {
            motto: function(){
                return "\"" + this.$store.state.mottoGoal + "\""
            }
        }
    }
</script>
