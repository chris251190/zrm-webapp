<template>
   <div>
      <section-title :title="title"/>
      <p class="subheading">{{introduction}}</p>

      <v-combobox
              v-model="chips"
              :items="items"
              :label="defaultText"
              chips
              clearable
              multiple>
         <template slot="selection" slot-scope="data">
            <v-chip
                    :selected="data.selected"
                    close
                    @input="remove(data.item)">
               <strong>{{ data.item }}</strong>&nbsp;
            </v-chip>
         </template>
      </v-combobox>

      <v-text-field
              v-model="motto"
              :rules="mottoRules"
              :counter="100"
              :label="mottoTextField"
              required
              @change="handleChange"
      ></v-text-field>
   </div>
</template>


<script>
    import SectionTitle from "./SectionTitle";

    export default {
        name: 'motto-goal',
        components: {SectionTitle},
        data() {
            return {
                title: 'Mottoziel bilden',
                introduction: 'Hier sind noch einmal deine Lieblingsideen aufgelistet. ' +
                    'Mit diesen kannst du nun dein Mottoziel bauen. Dieses soll eine ' +
                    'innere Haltung beschreiben, die du in Bezug auf dein ursprüngliches Ziel einnehmen willst.',
                chips: this.$store.state.associations,
                items: [],
                motto: '',
                mottoTextField: 'Dein Motto: ',
                mottoRules: [
                    v => !!v || 'Dein Motto ist noch leer',
                ],
                defaultText: 'Notiere hier deine Ideen und drücke Enter zum Bestätigen'
            }
        },
        methods: {
            remove (item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            },
            handleChange(mottoGoal) {
                this.$store.commit("addMottoGoal", mottoGoal);
            }
        },
        watch: {
            'chips': {
                deep: true
            }
        }
    }
</script>