<template>
    <div>
        <h1>Секция с пользователями</h1>
        <NuxtChild />
    </div>
</template>

<script>
export default {
    middleware: 'checkAuth',
}
</script>