export default function(context) {
    const auth = context.store.state.auth.isAuthorized
    // const auth = context.store.getters['auth/isAuthorized']
    if (!auth) {
        context.redirect(405, '/')
    }
}