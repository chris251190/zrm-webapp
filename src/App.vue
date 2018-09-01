<template>
    <v-app>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-content>
            <wish-elements-content/>
        </v-content>
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
