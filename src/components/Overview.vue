<template>
    <div>
        <div>{{text}} {{this.$store.state.mottoGoal}}</div>


        <div>{{primes}}</div>

        <v-form v-model="valid">
            <v-text-field
                    v-model="name"
                    label="Erinnerungshilfe 1"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="email"
                    label="Erinnerungshilfe 2"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="email"
                    label="Erinnerungshilfe 3"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="email"
                    label="Erinnerungshilfe 4"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="email"
                    label="Erinnerungshilfe 5"
                    required
            ></v-text-field>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "overview",
        data() {
            return {
            text: 'Dein Mottoziel ist fertig und lautet: ',
                primes: 'Um dein Mottoziel zu stärken, brauchst du noch Erinnerungshilfen: Diese können alles mögliche sein' +
                    'wie ein neues Passwort, ein Schlüsselanhänger, ein neues Hintergrundbild für dein Handy oder ein neues Kleidungsstück' +
                    ' beispielsweise. Die Hauptsache ist, dass es neu ist und dich an dein Mottoziel erinnert. Für den Anfang werden 5 Erinnerungshilfen' +
                    ' empfohlen.'
            }
        }
    }
</script>
