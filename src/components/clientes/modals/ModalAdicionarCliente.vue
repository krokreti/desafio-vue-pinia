<!-- HTML -->
<template>
  <section :class="abrirModal">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button type="button" @click="$emit('closeModal')">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input
          type="text"
          autocomplete="false"
          spellcheck="false"
          placeholder="Digite aqui..."
          v-model="nome"
        />
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input
          type="tel"
          autocomplete="false"
          spellcheck="false"
          placeholder="(99) 99999-9999"
          v-model="whatsapp"
        />
      </div>
      <button type="button" class="principal" @click="saveClient">
        Salvar Cliente
      </button>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
import { computed, ref } from "vue";
import { useClientStore } from "../../../stores/ClientStore";

const emit = defineEmits(["closeModal"]);

const clientStore = useClientStore();

const abrirModal = computed(() => {
  return props.showModal == true ? "modal mostrar" : "modal";
});

const nome = ref("");
const whatsapp = ref("");

function saveClient() {
  clientStore.addClient({ nome: nome.value, whatsapp: whatsapp.value });
  nome.value = "";
  whatsapp.value = "";
  emit("closeModal");
}

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
</style>
