<!-- HTML -->
<template>
  <section class="titulo">
    <button type="button" class="adicionar" @click="openModal"><p>Adicionar novo cliente</p></button>
    <ModalAdicionarCliente :showModal="showModal" @close-modal="closeModal"/>
  </section>
</template>

<!-- JS -->
<script setup>
import ModalAdicionarCliente from "../modals/ModalAdicionarCliente.vue";
import { ref } from 'vue'


const showModal = ref(false);

function closeModal() {
  showModal.value=false;
}

function openModal() {
  showModal.value=true;
}


</script>

<!-- CSS -->
<style scoped>
.tela {
  margin: 0 50px 0 0;
}
.input {
  max-width: 400px;
}
button.adicionar {
  margin-left: auto;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
  .input {
    margin: 20px 0;
  }
  button.adicionar {
    margin-left: 0;
  }
}
</style>
