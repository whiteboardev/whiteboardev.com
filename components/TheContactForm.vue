<template>
  <form id="contact-form" class="contact-form" @submit.prevent="sendWhatsappMessage">
    <div class="contact-form-container">
      <h3>Conte um pouco sobre sua ideia e entraremos em contato</h3>

      <label for="name">Seu Nome</label>
      <input v-model="formValues.name" id="name" type="text" required />

      <label for="email">Seu Email</label>
      <input v-model="formValues.email" id="email" type="email" required />

      <label for="phone">Seu Telefone ou Celular</label>
      <input v-model="formValues.phone" id="phone" type="phone" required />

      <label for="dream">Seu Sonho</label>
      <textarea v-model="formValues.dream" id="dream" />

      <button type="submit">Comece Agora</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const { $notyf } = useNuxtApp();

const formValues = reactive({
  name: "",
  email: "",
  phone: "",
  dream: "",
});

async function sendWhatsappMessage() {
  try {
    const response = await $fetch("/api/message", {
      method: "POST",
      body: {
        ...formValues,
      },
    });
    $notyf.success("Mensagem enviada com sucesso");
  } catch (error) {
    $notyf.error("Um erro aconteceu");
  }
}
</script>
