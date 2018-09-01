<template>
    <div>
        <v-subheader>
            {{wishelement}}
        </v-subheader>
        <v-combobox
                v-model="chips"
                :items="items"
                :label="wishelement"
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
        props: ['wishelement'],
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