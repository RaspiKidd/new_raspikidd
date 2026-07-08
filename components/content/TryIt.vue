<script setup lang="ts">
withDefaults(defineProps<{ icon?: string; title?: string }>(), {
  icon: '🚀',
  title: 'Try it yourself',
})
</script>

<template>
  <div class="try-it">
    <div class="try-it__header">
      <span v-text="icon" />
      <strong v-text="title" />
    </div>
    <div class="try-it__body"><slot /></div>
  </div>
</template>

<style scoped>
.try-it { border: 1px dashed #c9b6e6; background: #f7f1fd; border-radius: 10px; padding: 1rem 1.1rem; margin: 1rem 0; }
.try-it__header { display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; }
.try-it__body :first-child { margin-top: 0; }
.try-it__body :last-child { margin-bottom: 0; }
</style>