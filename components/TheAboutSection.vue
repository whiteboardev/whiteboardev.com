<template>
  <article ref="about" id="about" class="about">
    <ul id="about-phases" class="about-phases">
      <TheAboutPhase
        id="about-discovery-phase"
        title=""
        :description="discoveryPhaseMessage"
        @next:phase="scrollTo('#about-design-phase')"
      >
        <template #title>
          <h1 id="about-discovery-phase-title" class="about-phase-title">
            Fase de
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="about-icon">
                <path
                  d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                />
              </svg>
            </span>
            <br />
            Descoberta
          </h1>
        </template>
      </TheAboutPhase>
      <TheAboutPhase
        id="about-design-phase"
        :description="designPhaseMessage"
        @next:phase="scrollTo('#about-implementation-phase')"
      >
        <template #title>
          <h1 id="about-design-phase-title" class="about-phase-title">
            Fase de
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="about-icon">
                <path
                  d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"
                />
              </svg>
            </span>
            <br />
            Design
          </h1>
        </template>
      </TheAboutPhase>
      <TheAboutPhase id="about-implementation-phase" :description="implementationPhaseMessage">
        <template #title>
          <h1 id="about-implementation-phase-title" class="about-phase-title">
            Fase de
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="about-icon">
                <path
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
            </span>
            <br />
            Implementacao
          </h1>
        </template>
        <template #cta>
          <button type="button" id="about-cta" class="about-cta" @click="scrollTo('#contact-form')">
            De o primeiro passo. Entre em contato!
          </button>
        </template>
      </TheAboutPhase>
    </ul>
  </article>
</template>

<script setup lang="ts">
import Lenis from "@studio-freight/lenis";

const discoveryPhaseMessage =
  "Nesta fase emocionante, sentamos juntos, com o café na mão, para mergulhar profundamente em seus sonhos e aspirações de negócios. É tudo uma questão de entender o que torna sua marca especial e única.";

const designPhaseMessage =
  "Transformamos suas aspirações em arte digital. Nosso objetivo é criar um site que mostre sua experiência, cativando seus visitantes, mantendo-os envolvidos a cada passo do caminho. Apresentamos nossos designs a você e, juntos, ajustamos cada detalhe até que pareça perfeito.";

const implementationPhaseMessage =
  "Nossos desenvolvedores qualificados dão vida aos designs com precisão. Testes rigorosos garantem funcionalidade impecável em todos os dispositivos. Seu site surge pronto para deixar um impacto duradouro em seu público. Juntos, faremos esta emocionante jornada para o sucesso!";

const props = defineProps({
  lenis: {
    type: Lenis,
    default: null,
  },
});

function scrollTo(id: string) {
  if (props.lenis) {
    props.lenis.scrollTo(id);
  }
}
</script>
