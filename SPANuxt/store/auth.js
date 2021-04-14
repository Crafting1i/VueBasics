export const state = () => ({
    isAuthorized: true,
})

export const getters = {
    isAuthorized() {
        return state.isAuthorized
    }
}