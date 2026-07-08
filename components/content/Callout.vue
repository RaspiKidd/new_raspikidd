<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ icon?: string; color?: string }>(), {
  icon: '💡',
  color: 'gray',
})

const palette: Record<string, string> = {
  gray: '#f4f4f3', green: '#edf6f0', blue: '#eaf2fb', purple: '#f3eefb',
  red: '#fbeeee', orange: '#fbf3ea', yellow: '#fbf8ea',
}
const bg = computed(() => palette[props.color] ?? palette.gray)
</script>

<template>
  <div class="callout" :style="{ background: bg }">
    <span class="callout__icon" v-text="icon" />
    <div class="callout__body"><slot /></div>
  </div>
</template>

<style scoped>
.callout { display: flex; gap: 0.75rem; padding: 1rem 1.1rem; border-radius: 10px; margin: 1rem 0; }
.callout__icon { font-size: 1.2rem; line-height: 1.4; }
.callout__body :first-child { margin-top: 0; }
.callout__body :last-child { margin-bottom: 0; }
</style>