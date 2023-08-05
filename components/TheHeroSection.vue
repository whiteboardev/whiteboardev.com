<template>
  <section id="hero-section" class="hero">
    <div id="hero-intro-container" class="hero-intro-container">
      <article id="introduction" class="hero-intro">
        <h1 id="hero-intro-title" class="hero-intro-title">Maximize suas Conversões.</h1>
        <h4 id="hero-intro-copy" class="hero-intro-copy"></h4>
        <button type="button" id="hero-cta" class="hero-cta" @click="$emit('click', $event)">Agende uma reunião</button>
        <ul id="hero-quick-links" class="hero-quick-links">
          <li id="hero-instagram-quick-link" class="hero-quick-link-item">
            <a href="https://www.instagram.com/whiteboarddev" target="_blank">
              <img type="image/svg+xml" src="/assets/icons/instagram.svg" alt="Instagram" class="instagram-icon" />
            </a>
          </li>
          <li id="hero-instagram-quick-link" class="hero-quick-link-item">
            <a href="https://www.youtube.com/channel/UCLxviggksYVTLzCS1TtEaYQ" target="_blank">
              <img type="image/svg+xml" src="/assets/icons/youtube.svg" alt="Youtube Channel" class="youtube-icon" />
            </a>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
import Typed from "typed.js";

onMounted(() => {
  const typed = new Typed("#hero-intro-copy", {
    strings: ["Transforme visitantes em clientes com designs personalizados e estratégias especializadas"],
    typeSpeed: 50,
    showCursor: false,
  });

  typed.start();
});
</script>
