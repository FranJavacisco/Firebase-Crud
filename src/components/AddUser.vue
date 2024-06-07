<!-- src/components/AddUser.vue -->
<template>
    <div>
        <h2>Agregar Usuario</h2>
        <form @submit.prevent="submitForm">
            <input v-model="name" type="text" placeholder="Nombre" required>
            <input v-model="email" type="email" placeholder="Correo electrónico" required>
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: ''
        };
    },
    methods: {
        submitForm() {
            const user = {
                name: this.name,
                email: this.email
            };
            this.$store.dispatch('addUser', user);
            this.name = '';
            this.email = '';
        }
    }
};
</script>
