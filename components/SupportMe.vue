<!-- components/SupportMe.vue -->
<template>
  <aside
    class="my-12 flex flex-col items-center gap-6 rounded-xl border border-leaf bg-sage p-6 text-center sm:flex-row sm:text-left"
  >
    <img
      src="/learn/support/microbit-stand.webp"
      alt="A micro:bit held upright in a green 3D-printed stand"
      class="h-32 w-32 shrink-0 rounded-lg object-cover shadow-sm"
      loading="lazy"
    />
    <div>
      <p class="mb-1 text-lg font-semibold text-emerald-800">
        🐾 Help fund the RaspiKidd 3D printer!
      </p>
      <p class="mb-4 max-w-prose text-sm leading-relaxed text-gray-700">
        These tutorials are free and open under Creative Commons, forever. I'm
        saving for a 3D printer so I can design and share printable kit like this
        micro:bit stand, robot chassis and more, all free to download. If this
        tutorial helped you, a coffee gets me a little closer. Thank you!
      </p>
      <a
        href="https://ko-fi.com/raspikidd"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block rounded-md bg-emerald-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        ☕ Support RaspiKidd on Ko-fi
      </a>
    </div>
  </aside>
</template>