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
                        Step {{ n }}
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
                        {{question}}

                        <wish-elements-ideas-section v-for="(idea, index) in ideas" :key="index" :idea="idea"/>
                    </div>

                    <motto-goal v-if="n === 3"/>

                    <v-btn
                            color="primary"
                            @click="nextStep(n)">
                        Continue
                    </v-btn>

                    <v-btn flat>Cancel</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>

</template>

<script>
    import WishElementsIdeasSection from "./WishElementsIdeasSection";
    import WishElementsForm from "./WishElementsForm";
    import MottoGoal from "./MottoGoal";

    export default {
        name: 'wish-elements-content',
        components: {WishElementsForm, WishElementsIdeasSection, MottoGoal},
        data() {
            return {
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
                steps: 3,
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
            onInput(val) {
                this.steps = parseInt(val)
            },
            nextStep(n) {
                if (n === this.steps) {
                    this.e1 = 1
                } else {
                    this.e1 = n + 1
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
