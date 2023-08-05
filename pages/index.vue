<template>
  <header id="header" class="header">
    <h1 id="company-title" class="company-title">Whiteboard</h1>
    <nav id="navigation-menu" class="navigation">
      <ul id="navigation-bar" class="navition-option-list">
        <li id="navigation-item" class="navigation-item">Sobre</li>
        <li id="navigation-item" class="navigation-item">Portfolio</li>
        <li id="navigation-item" class="navigation-item">FAQ</li>
        <li id="navigation-item" class="navigation-item">Sorbre</li>
      </ul>
    </nav>
  </header>
  <main id="main-content" class="main-content">
    <img src="/assets/images/light_logo.png" alt="light logo" class="floating-logo logo-top" />
    <TheHeroSection @click="scrollToContactForm" />
    <TheAboutSection :lenis="lenis" />
    <TheContactForm />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import Lenis from "@studio-freight/lenis";

let lenis: Ref<Lenis | null | undefined> = ref(null);

onMounted(() => {
  lenis.value = new Lenis();
  function raf(time: number) {
    if (lenis.value) {
      lenis.value.raf(time);
      requestAnimationFrame(raf);
    }
  }
  requestAnimationFrame(raf);
});

function scrollToContactForm() {
  if (lenis.value) {
    lenis.value.scrollTo("#contact-form");
  }
}
</script>
