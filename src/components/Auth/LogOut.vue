<template>
    <div>
        <v-btn>
            <router-link to="/en/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout()">Logout</a></span>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "LogOut",
        computed : {
            isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
        },
        methods:{
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        }

    }
</script>

<style scoped>

</style>
