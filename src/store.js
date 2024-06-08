// src/store.js
import Vuex from 'vuex';
import { db } from './firebase';

export default new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        addUser(state, user) {
            state.users.push(user);
        },
        deleteUser(state, id) {
            state.users = state.users.filter(user => user.id!== id);
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            const snapshot = await db.collection('users').get();
            const users = snapshot.docs.map(doc => ({ id: doc.id,...doc.data() }));
            commit('setUsers', users);
        },
        async addUser({ commit }, user) {
            const docRef = await db.collection('users').add(user);
            commit('addUser', { id: docRef.id,...user });
        },
        async deleteUser({ commit }, id) {
            await db.collection('users').doc(id).delete();
            commit('deleteUser', id);
        }
    }
});