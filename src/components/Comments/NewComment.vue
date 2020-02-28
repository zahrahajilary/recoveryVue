<template>
    <div>
           <v-row>
               <v-col sm="12" md="3">
                   <v-text-field :label="$t('email')"
                                 outlined v-model="email"
                                  hide-details="auto"
                                 class="mb-2"
                   >
                   </v-text-field>
                   <v-text-field :label="$t('user-name')"
                                 outlined v-model="userName"
                                 hide-details="auto">
                   </v-text-field>
               </v-col>
           </v-row>
            <v-row>
               <v-col sm="12" md="8">
                   <v-textarea
                           :label="$t('body')"
                           auto-grow
                           outlined
                           rows="10"
                           row-height="25"
                           shaped
                           v-model="body"
                   ></v-textarea>
                   <v-btn  color="blue " @click="sendComment">ثبت</v-btn>
               </v-col>
            </v-row>
    </div>
</template>

<script>
    export default {
        props:['sendComment'],
        name: "NewComment",
        data(){
            return {
                email: '',
                userName: '',
                body: ''
            }
        }
    }
</script>

<style scoped>
    .v-text-field .v-input__control .v-input__slot {
        min-height: 30px !important;
        display: flex !important;
        align-items: center !important;
    }


</style>
