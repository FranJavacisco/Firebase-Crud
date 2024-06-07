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
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    methods: {
        deleteUser(id) {
            this.$store.dispatch('deleteUser', id);
        }
    },
    created() {
        this.$store.dispatch('fetchUsers');
    }
};
</script>
