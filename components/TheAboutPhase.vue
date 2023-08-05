<template>
  <li :id="id" class="about-phase">
    <h1 :id="`${id}-title`" class="about-phase-title">
      {{ props.title }}
      <span>
        <slot name="icon" />
      </span>
    </h1>
    <p id="about-discovery-description" class="about-description">
      {{ props.description }}
    </p>
    <slot name="cta">
      <TheChevronDownButton @click="$emit('next:phase', $event)" />
    </slot>
  </li>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: null,
  },
});
</script>
