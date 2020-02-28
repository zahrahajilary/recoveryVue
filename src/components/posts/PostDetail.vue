<template>
    <div>
        <v-container>
        <v-card>
            <v-card-title><span>{{$t('text-title')}}</span><span>:{{postInfo.title}}</span></v-card-title>
            <v-divider></v-divider>
            <v-card-text>{{postInfo.body}}</v-card-text>
        </v-card>
            <h4></h4>
        <NewComment :send-comment="sendComment"/>
            <v-card-title>{{$t('title-cm')}}</v-card-title>
            <div class="commentsStyle">
                <div v-for="(cm,index) in comments" :key="index">
                    <CommentList :comment="cm"/>
                    <v-divider></v-divider>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    import CommentList from "../Comments/CommentList";
    import NewComment from "../Comments/NewComment";
    export default {
        name: "PostDetail",
        data(){
            return {
                postInfo:[],
                comments:[]
            }
        },
        methods:{
            getContent(uid){
                const url = `posts/${uid}`
                this.$axios.get(url)
                .then(res=>{
                    this.postInfo = res.data
                })
                .then(()=>{
                    this.getComments(uid)
                })
                .catch(err=>err)
            },

            getComments(postId){
                 this.$axios.get('comments',{params:{postId:postId}})
                .then(res=>{this.comments = res.data})
                .catch(err=>{console.log(err)})

            },
            sendComment(){
                console.log('hello')
            }
        },
        components:{
            CommentList,
            NewComment
        },
        created () {
             this.getContent(this.$route.params.id);
        },
        beforeRouteUpdate (to, from, next) {
            this.getContent(to.params.id);
            next();
        }
    }
</script>

<style scoped>
.commentsStyle {
    -webkit-box-shadow: -3px -1px 18px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -3px -1px 18px -8px rgba(0,0,0,0.75);
    box-shadow: -3px -1px 18px -8px rgba(0,0,0,0.75);
}
</style>
