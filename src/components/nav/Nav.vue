<template>
      <div>
            <v-card flat>
                  <v-card-text>
                        <v-container  class="justify-center">
                              <v-row>
                                    <v-col cols="12" sm="3">
                                          <v-btn text  color="gray">
                                               <router-link to="/home">Home</router-link>
                                          </v-btn>
                                    </v-col>

<!--                                    <v-col cols="12" sm="3">-->
<!--                                                <v-btn text  color="gray">-->
<!--                                                      <router-link to="home">About Us</router-link>-->
<!--                                                </v-btn>-->

<!--                                    </v-col>-->
                                    <v-col cols="12" sm="3">
                                         <LogOut/>
                                    </v-col>

                                    <v-col cols="12" sm="3">
                                          <v-btn text  color="gray">
                                                <router-link to="/en/posts/1">Post</router-link>
                                          </v-btn>
                                    </v-col>

<!--                                    <v-col cols="12" sm="3">-->
<!--                                          <v-btn text  color="gray">-->
<!--                                                <router-link to="home">Home</router-link>-->
<!--                                          </v-btn>-->
<!--                                    </v-col>-->
                              </v-row>
                        </v-container>
                  </v-card-text>
            </v-card>

      </div>


</template>
<script>
    import LogOut from "../Auth/LogOut";
    export default {
        data(){
            return {

            }
        },
        methods:{

        },
          components:{
              LogOut
          }

    }
</script>
