<template>
  <form id="contact-form" class="contact-form" @submit.prevent="sendContactEmail">
    <div class="contact-form-container">
      <h3>Conte um pouco sobre sua ideia e entraremos em contato</h3>

      <label>Seu Nome</label>
      <input type="text" required />

      <label>Seu Email</label>
      <input type="email" required />

      <label>Seu Telefone ou Celular</label>
      <input type="phone" required />

      <label>Seu Sonho</label>
      <textarea />

      <button type="submit">Comece Agora</button>
    </div>
  </form>
</template>

<script setup lang="ts">
function sendContactEmail() {
  console.log("Send");
}
</script>
