<script setup lang="ts">
import Button from '../Button/Button.vue';
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: "overlay"): void
}>()

const modalEl = ref<HTMLDivElement | null>(null);
onClickOutside(modalEl, (e) => emit("overlay"));
</script>

<template>
  <div
    v-if="open" 
    class="absolute top-0 left-0 h-[100dvh] w-[100vw] bg-black/50 backdrop-blur-[1px] flex items-center justify-center"
  >
    <div
      ref="modalEl" 
      class="bg-slate-800 rounded p-6 flex flex-col justify-between min-w-[300px] min-h-[150px]"
    >

      <header class="text-md font-bold">
        <slot name="header">
          <p>Header</p>
        </slot>
      </header>

      <main class="text-sm">
        <slot name="main">
          <p>About information</p>
        </slot>
      </main>

      <footer>
        <slot name="footer">
          <Button>OK</Button>
          <Button variant="secondary">Cancel</Button>
        </slot>
      </footer>

    </div>
  </div>
</template>