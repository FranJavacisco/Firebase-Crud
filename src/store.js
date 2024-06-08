// store.js
import { db } from './firebase';

async function deleteUser({ commit }, id) {
    try {
        await db.collection('users').doc(id).delete();
        commit('deleteUser', id);
    } catch (error) {
        console.error(`Error deleting user: ${error}`);
    }
}

// Llamar a la función deleteUser en algún lugar del código
deleteUser({ commit: () => { } }, 'ome-id');