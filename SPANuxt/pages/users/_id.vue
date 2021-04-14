<template>
    <div><h1>Пользователь: {{ user.name }}</h1></div>
</template>

<script>
export default {
    async fetch(context) { //Как asyncData, но позднее и с доступом к this
        this.users = await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json())
    },
    async asyncData(context) {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
            .then(res => res.json())
        
        return {
            user
        }
    },
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },
    computed: {
        id () {
            return this.$route.params.id
        }
    }
}
</script>