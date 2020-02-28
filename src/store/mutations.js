

export const mutations = {
    auth_request(state){
        state.status = 'loading'
    },
    auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
    },
    logout(state){
        state.status = ''
        state.token = ''
    },
    auth_error(state){
        state.status = 'error'
    },
}
