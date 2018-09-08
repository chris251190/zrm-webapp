<template>
   <div>{{introduction}}</div>
</template>


<script>
    export default {
        name: 'motto-goal',
        data() {
            return {
                introduction: 'Hier sind noch einmal deine Lieblingsideen aufgelistet.' +
                    'Mit diesen kannst du nun dein Mottoziel bauen. Dieses soll eine ' +
                    'innere Haltung beschreiben, die du in Bezug auf dein ursprüngliches Ziel einnehmen willst.'
            }
        }
    }
</script>