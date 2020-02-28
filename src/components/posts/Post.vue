<template>
    <div>
        <v-card shaped class="postClicked" @click="getDetailPost(postInfo.id)">
            <v-card-title>{{postInfo.title}}</v-card-title>
            <v-divider>
            </v-divider>
            <v-card-text>{{postInfo.body}}</v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Post.vue",
        props:['postInfo'],
        methods:{
            getDetailPost(pid){
                this.$router.push({ name: 'PostDetail', params:{id:pid}})

            }
        }

    }
</script>

<style scoped>
    .postClicked {
        cursor:pointer;
    }

</style>
