<template>
    <div>
        <v-subheader>
            {{idea}}
        </v-subheader>
        <v-combobox
                v-model="chips"
                :items="items"
                :label="defaultText"
                chips
                clearable
                prepend-icon="filter_list"
                solo
                multiple
                @change="handleChange"
        >
            <template slot="selection" slot-scope="data">
                <v-chip
                        :selected="data.selected"
                        close
                        @input="remove(data.item)"
                        >
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
        data() {
            return {
                chips: [],
                items: [],
                defaultText: 'Notiere hier deine Ideen und drücke Enter zum Bestätigen'
            }
        },
        methods: {
            remove(item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            },
            handleChange(association) {
                this.$store.commit('addAssociation', association[association.length-1])
            }
        }
    }
</script>