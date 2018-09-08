<template>
   <div>
      {{introduction}}

      <v-combobox
              v-model="chips"
              :items="items"
              :label="defaultText"
              chips
              clearable
              prepend-icon="filter_list"
              solo
              multiple>
         <template slot="selection" slot-scope="data">
            <v-chip
                    :selected="data.selected"
                    close
                    @input="remove">
               <strong>{{ data.item }}</strong>&nbsp;
            </v-chip>
         </template>
      </v-combobox>

      <v-text-field
              v-model="motto"
              :rules="mottoRules"
              :counter="100"
              label="Dein Motto: "
              required
      ></v-text-field>
   </div>
</template>


<script>
    export default {
        name: 'motto-goal',
        data() {
            return {
                introduction: 'Hier sind noch einmal deine Lieblingsideen aufgelistet.' +
                    'Mit diesen kannst du nun dein Mottoziel bauen. Dieses soll eine ' +
                    'innere Haltung beschreiben, die du in Bezug auf dein ursprüngliches Ziel einnehmen willst.',
                chips: ['Ice cream', 'Firefly'],
                items: [],
                motto: '',
                mottoRules: [
                    v => !!v || 'Dein Motto ist noch leer',
                ],
            }
        },
        methods: {
            remove (item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            }
        }
    }
</script>