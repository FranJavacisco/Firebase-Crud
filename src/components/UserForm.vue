// UserForm.vue
<template>
    <form @submit="submitForm">
        <input type="text" v-model="user.name" placeholder="Nombre">
        <input type="email" v-model="user.email" placeholder="Correo electrónico">
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: ''
            }
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault(); // Evitamos que el formulario se envíe por defecto
            this.$store.dispatch('addUser', this.user);
        }
    }
}
</script>