<template>
    <div>
        <v-subheader>
            {{idea}}
        </v-subheader>
        <v-combobox
                v-model="chips"
                :items="items"
                :label="idea"
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
    </div>
</template>
<script>
    export default {
        name: 'wish-elements-ideas-section',
        props: ['idea'],
        data(){
            return {
                chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
                items: ['Streaming', 'Eating']
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