<template>
  <form id="contact-form" class="contact-form" @submit.prevent="sendContactEmail">
    <h3>Conte um pouco sobre sua ideia e entraremos em contato</h3>

    <label>Seu Nome</label>
    <input type="text" required />

    <label>Seu Email</label>
    <input type="email" required />

    <label>Seu Sonho</label>
    <textarea />

    <button type="submit">Comece Agora</button>
  </form>
</template>

<script setup lang="ts">
function sendContactEmail() {
  console.log("Send");
}
</script>
