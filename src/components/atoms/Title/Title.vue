<script setup lang="ts">
import { ref } from 'vue'
import type { ID } from '@/types';
import { useStore } from '@/store/store';

const props = defineProps<{
  id: ID
  title: string,
}>();

const store = useStore();
const el = ref<HTMLInputElement | null>(null);
const titleText = ref(props.title || "");

const titleHandler = (e: Event):void => {
  const element = e.target as HTMLInputElement;
  titleText.value = element.value;
}

const focusHandler = (e: Event):void => {
  const element = e.target as HTMLInputElement;
  element.setSelectionRange(0, element.value.length); 
}

const blurHandler = (e: Event):void => {
  const element = e.target as HTMLInputElement;
  if (!element.value.length) {
    titleText.value = "Please enter a title!"
  }
  store.updateListTitle(props.id, titleText.value);
}

</script>

<template>
  <input
    type="text"
    ref="el"
    :value="titleText"
    @input="titleHandler"
    :title="titleText"
    @keydown.enter="el?.blur()"
    @focus="focusHandler"
    @blur="blurHandler"
    class="title text-slate-300 text-lg w-full p-2 rounded truncate bg-slate-800 focus:bg-slate-700 focus:outline-none"
  />
</template>