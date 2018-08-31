<template>
    <v-app>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-content>
            <WishElementForm/>
        </v-content>
    </v-app>
</template>

<script>
    import WishElementForm from './components/WishElementForm'

    export default {
        name: 'App',
        components: {
            WishElementForm
        },
        data() {
            return {
                title: 'ZRM - Wunschelementetechnik'
            }
        }
    }
</script>
