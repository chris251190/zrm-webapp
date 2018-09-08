<template>
    <v-app>
        <v-container fluid>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-content>
                <wish-elements-content/>
            </v-content>
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
