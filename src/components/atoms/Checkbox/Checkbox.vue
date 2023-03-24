<script setup lang="ts">
import type { ID } from '@/types';
import { ref } from 'vue';

defineProps<{
  id: ID,
  checked: boolean
}>()

const emit = defineEmits<{
  (e: "checked", payload: boolean): void
}>()

const handler = (e: Event) => {
  const el = e.target as HTMLInputElement;
  emit("checked", el.checked);
}

</script>

<template>
  <input :id="id" type="checkbox" :class="`hidden peer/id`" :checked="checked" @change="handler"/>
  <label :for="id" class="text-xs cursor-pointer select-none p-2 rounded border" :class="{
    ['border-slate-600 hover:border-slate-500 text-slate-400']: !checked,
    ['border-green-400 hover:border-green-500 text-green-400']: checked
    }">
    <slot>Label</slot>
    <v-icon scale="0.75" name="oi-check" :class="{
      ['!hidden']: !checked,
      ['!inline-block']: checked
    }"/>
  </label>
</template>