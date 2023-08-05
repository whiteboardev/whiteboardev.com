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
    <section id="hero-section" class="hero">
      <div id="hero-intro-container" class="hero-intro-container">
        <article id="introduction" class="hero-intro">
          <h1 id="hero-intro-title" class="hero-intro-title">Maximize suas Conversões.</h1>
          <p id="hero-intro-copy" class="hero-intro-copy">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum enim distinctio consectetur optio labore, pariatur magni nobis ratione explicabo! Odit quaerat optio blanditiis numquam quidem inventore repudiandae similique nesciunt?</p>
          <button type="button" id="hero-cta" class="hero-cta">Agende uma reunião</button>
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
      <article ref="about" id="about" class="about">
        <h1 id="about-title" class="about-title">Minimize seu Esforço</h1>
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
        <button type="button" id="about-cta" class="about-cta">Agende uma reunião</button>
      </article>
    </section>
  </main>
  <footer></footer>
</template>



<script setup lang="ts">
  import Lenis  from '@studio-freight/lenis'

  onMounted(() => {
    const lenis = new Lenis()

    lenis.scrollTo("#about")

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }


   requestAnimationFrame(raf)
 })
</script>
