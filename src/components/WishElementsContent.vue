<template>
    <div>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <template v-for="n in steps">
                    <v-stepper-step
                            :complete="e1 > n"
                            :key="`${n}-step`"
                            :step="n"
                            editable
                    >
                        <span class="caption" v-if="n === 1">Wunschelemente finden</span>
                        <span class="caption" v-if="n === 2">hilfreiche Eigenschaften finden</span>
                        <span class="caption" v-if="n === 3">Mottoziel bilden</span>
                        <span class="caption" v-if="n === 4">Erinnerungshilfen finden</span>
                        <span class="caption" v-if="n === 5">Embodiment erarbeiten</span>
                        <span class="caption" v-if="n === 6">Übersicht zum Ausdrucken</span>
                    </v-stepper-step>

                    <v-divider
                            v-if="n !== steps"
                            :key="n"
                    ></v-divider>
                </template>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content
                        v-for="n in steps"
                        :key="`${n}-content`"
                        :step="n">
                    <wish-elements-form v-if="n === 1" :wishelements="wishelements"/>

                    <div v-if="n === 2">
                        <p class="title">{{title}}</p>
                        <p class="subheading">{{question}}</p>

                        <wish-elements-ideas-section v-for="(idea, index) in ideas" :key="index" :idea="idea"/>
                    </div>

                    <motto-goal v-if="n === 3"/>

                    <primes v-if="n === 4"/>

                    <embodiment v-if="n === 5"/>

                    <overview v-if="n === 6"/>

                    <v-btn v-if="n > 1"
                           color="primary"
                           @click="backStep(n)">
                        {{backwardsBtnText}}
                    </v-btn>

                    <v-btn v-if="n < 6"
                           color="primary"
                           @click="nextStep(n)">
                        {{continueBtnText}}
                    </v-btn>

                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>

</template>

<script>
    import WishElementsIdeasSection from "./WishElementsIdeasSection";
    import WishElementsForm from "./WishElementsForm";
    import MottoGoal from "./MottoGoal";
    import Primes from "./Primes";
    import Overview from "./Overview";
    import Embodiment from "./Embodiment";

    export default {
        name: 'wish-elements-content',
        components: {Embodiment, Primes, WishElementsForm, WishElementsIdeasSection, MottoGoal, Overview},
        data() {
            return {
                title: 'Hilfreiche Eigenschaften finden',
                question: 'Welche Eigenschaften hat dein Wunschelement, die dir dabei helfen können, dein Unbewusstes mit ins Boot zu holen?',
                wishelements: [
                    'Tier',
                    'Pflanze',
                    'Landschaft',
                    'Person',
                    'Fantasiefigur',
                    'Fahrzeug',
                    'Anderes'
                ],
                ideas: this.$store.state.ideas,
                e1: 1,
                steps: 6,
                continueBtnText: 'Weiter',
                backwardsBtnText: 'Zurück'
            }
        },
        watch: {
            steps(val) {
                if (this.e1 > val) {
                    this.e1 = val
                }
            }
        },

        methods: {
            nextStep(n) {
                if (n === this.steps) {
                    this.e1 = 1
                } else {
                    this.e1 = n + 1
                }
            },
            backStep(n) {
                if (n === this.steps) {
                    this.e1 = this.steps - 1
                } else {
                    this.e1 = n - 1
                }
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
