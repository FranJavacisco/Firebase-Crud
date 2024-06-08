<!-- src/components/UserList.vue -->
<template>
    <div>
        <h2>Lista de Usuarios</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
                <button @click="deleteUser(user.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        if (this.$store) {
            this.$store.dispatch('fetchUsers')
        } else {
            console.error('Store is not available')
        }
    }
}
</script>
