<template>
    <v-app>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-toolbar-title v-text="title"></v-toolbar-title>
                </v-flex>
                <v-content>
                    <wish-elements-content/>
                </v-content>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import WishElementsContent from './components/WishElementsContent'

    export default {
        name: 'App',
        components: {
            WishElementsContent
        },
        data() {
            return {
                title: 'ZRM - Wunschelementetechnik'
            }
        }
    }
</script>
