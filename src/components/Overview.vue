<template>
    <div>{{text}} {{this.$store.state.mottoGoal}}</div>
</template>

<script>
    export default {
        name: "overview",
        data() {
            return {
            text: 'Dein Mottoziel ist fertig und lautet: ',
            }
        }
    }
</script>
