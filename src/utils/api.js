import '../plugins/axios'
const url = 'https://reqres.in/api/login'
export const loginApi =(data)=> this.axios.post(url,data)
    .then(resp=> resp)
    .catch(err=>err)
