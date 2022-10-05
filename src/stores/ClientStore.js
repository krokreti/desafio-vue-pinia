import { defineStore } from "pinia";

export const useClientStore = defineStore("ClientStore", {
    state: () => {
        return {
            clients: []
        }
    },

    actions: {
        addClient(client) {
            this.clients.push(client)
        }
    },

    getters: {
        allClients: state => { return state.clients }
    }
})