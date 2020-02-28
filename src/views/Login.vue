<template>
    <div id="app">
        <v-container>
            <v-layout row class="text-xs-center">
                <v-flex xs4 class="grey lighten-4">
                    <v-container style="position: relative;top: 13%;" class="text-xs-center">
                        <v-card flat>
                            <v-card-title primary-title>
                                <h4>Login</h4>
                            </v-card-title>
                            <v-form>
                                <v-text-field  name="Username"  v-model="username" label="Username"></v-text-field>
                                <v-text-field name="Password"  v-model ="password" label="Password" type="password"></v-text-field>
                                <v-card-actions>
                                    <v-btn primary large block @click="login()">Login</v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>

    export default {
        name: "Login",
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            login: function () {
                let email = this.username
                let password = this.password
                const body = {
                    email:email,
                    password:password
                }
                // loginApi(body)
                this.$store.dispatch('login', body )
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }

        }
    }
</script>

<style scoped>

</style>
