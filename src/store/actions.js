

export  async function login ({commit}, user){
    const url = 'https://reqres.in/api/login'
    return new Promise((resolve, reject) => {
        console.log('hello')
        commit('auth_request')
        this.$axios.post(url, user )
            .then(resp => {
                console.log('checked', resp)
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)

                this.$axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
                resolve(resp)
            })
            .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
            })
    })
}

export const logout = ({commit})=>{
    return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete this.$axios.defaults.headers.common['Authorization']
        resolve()
    })
}
