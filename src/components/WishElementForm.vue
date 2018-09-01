<template>
    <div>
        <v-card class="mb-3">
            <v-card-text>
                <div>{{ typeof steps }}</div>

                <v-text-field
                        :value="steps"
                        hint="This demo has a maximum of 6 steps"
                        label="# of steps"
                        max="6"
                        min="1"
                        persistent-hint
                        type="number"
                        @input="onInput"
                ></v-text-field>
            </v-card-text>
        </v-card>
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
                    <v-form v-model="valid" v-if="n === 1">
                        {{wishelementquestion}}
                        <v-text-field v-for="(wishelement, index) in wishelements"
                                      :key="index"
                                      v-model="email"
                                      :rules="emailRules"
                                      :label="wishelement"
                                      required/>
                    </v-form>

                    <wish-elements-ideas-section  v-for="(wishelement, index) in wishelements" :key="index" v-if="n === 2" :wishelement="wishelement"/>

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

    export default {
        name: 'WishElementForm',
        components: {WishElementsIdeasSection},
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
                ],
                e1: 1,
                steps: 2,


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
