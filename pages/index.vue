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
    <section id="hero-section" class="hero">
      <article id="introduction" class="hero-intro">
        <h1 id="hero-intro-title" class="hero-copy-title">Maximize suas Conversões.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum enim distinctio consectetur optio labore, pariatur magni nobis ratione explicabo! Odit quaerat optio blanditiis numquam quidem inventore repudiandae similique nesciunt?</p>
      </article>
      <button type="button" id="hero-cta" class="hero-cta">Agende uma reunião</button>
      <article id="detail" class="hero-detail">
        <h1 id="hero-intro-detail" class="hero-copy-detail">Minimize seu Esforço</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum enim distinctio consectetur optio labore, pariatur magni nobis ratione explicabo! Odit quaerat optio blanditiis numquam quidem inventore repudiandae similique nesciunt?</p>
      </article>
      <button type="button" id="hero-cta" class="hero-cta">Agende uma reunião</button>
    </section>
  </main>
  <footer></footer>
</template>



<script setup lang="ts">
  import Lenis  from '@studio-freight/lenis'
  onMounted(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e: Event) => {
      console.log(e)
    })

   function raf(time: number) {
     lenis.raf(time)
     requestAnimationFrame(raf)
   }

   requestAnimationFrame(raf)
 })
</script>
