<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                <nuxt-link :to='`/users/${user.id}`'> {{ user.name }} </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData(context) {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        
        return {
            users
        }
    },
    data() {
        return {
            users: []
        }
    },
    async created() {
        
    }
}
</script>