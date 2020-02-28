<template>
   <div>
       <div v-for="(post, index) in showPost" :key="index">
           <div class="ma-lg-4">
               <Post :post-info="post" />
           </div>
       </div>
       <div class="text-center">
          <PaginationBtn :num-of-pages="length" :initialPage="1" :per-page="10" :data="posts" @clicked="onCLickedPage"/>
       </div>
   </div>
</template>

<script>
    import Post from "../components/posts/Post";
    import PaginationBtn from '../components/paginations/PaginationBtn'
    export default {
        name: "Posts.vue",
        data(){
            return {
                posts:[],
                showPost:[],
                page:1,
                length:null,
            }
        },
        methods:{
            getPostList(){
                //i use 'jsonplaceholder.ir' that it dose not  support pagination so i simulate pagination in my code
               this.$axios.get('/posts')
                .then(res=>{
                    this.posts = res.data
                    let pageNumber = this.posts.length
                    this.length = pageNumber/10
                    this.showPost =  this.posts.slice(0, 10);
                })
                .catch(err => err)
            },
            onCLickedPage(value){
                this.showPost = value
            }
        },
        created() {
            this.getPostList()

        },
        components:{
            PaginationBtn,
            Post
        },

    }
</script>


<style scoped>

</style>
