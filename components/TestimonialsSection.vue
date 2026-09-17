<!-- components/TestimonialsSection.vue -->
<template>
  <section class="bg-sage/50 px-4" :class="variant === 'compact' ? 'py-8' : 'py-12'">
    <div class="max-w-4xl mx-auto text-center">
      <h2 v-if="variant === 'full'" class="font-heading text-emerald-800 semi-bold text-2xl md:text-3xl mb-8">
        {{ heading }}
      </h2>

      <div class="grid gap-6" :class="variant === 'compact' ? 'grid-cols-1' : 'md:grid-cols-3'">
        <blockquote
          v-for="(item, index) in variant === 'compact' ? testimonials?.slice(0, 1) : testimonials"
          :key="index"
          class="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <p class="font-body text-gray-700 italic mb-4">
            "{{ item.quote }}"
          </p>
          <footer class="font-heading text-brand-dark text-sm mt-auto">
            — {{ item.attribution }}
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  heading?: string
  tag?: string
  variant?: 'full' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  heading: 'What people say',
  variant: 'full',
})

const { data: testimonials } = await useAsyncData(
  `testimonials-${props.tag ?? 'all'}`,
  () => {
    const query = queryCollection('testimonials')
    return props.tag
      ? query.where('tags', 'LIKE', `%${props.tag}%`).all()
      : query.all()
  },
)
</script>