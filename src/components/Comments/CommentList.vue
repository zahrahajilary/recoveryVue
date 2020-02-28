<template>
    <v-row>
            <h5 class="ma-lg-4">{{comment.name}}</h5>
            <v-card-text class="mr-4">{{comment.body}}</v-card-text>
    </v-row>
</template>

<script>
    export default {
        name: "CommentList.vue",
        props:['comment']
    }
</script>

<style scoped>
.comment-card {
    border:1px solid gray
}
</style>
