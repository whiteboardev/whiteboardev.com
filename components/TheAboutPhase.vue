<template>
  <li :id="id" class="about-phase">
    <slot name="title" />
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
  description: {
    type: String,
    default: null,
  },
});
</script>
