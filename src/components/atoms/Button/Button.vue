<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: "primary" | "secondary" | "alert" | "ghost"
}>(), {
  variant: "primary"
});

let primary = props.variant === "primary";
let secondary = props.variant === "secondary";
let alert = props.variant === "alert";
let ghost = props.variant === "ghost";
</script>

<template>
  <button
    class="px-3 py-1 rounded text-slate-200" 
    :class="{
      ['bg-sky-500 hover:bg-sky-700 active:bg-sky-800']: primary,
      ['bg-violet-500 hover:bg-violet-600 active:bg-violet-700']: secondary,
      ['bg-pink-500 hover:bg-pink-600 active:bg-pink-700']: alert,
      ['hover:bg-slate-700 active:bg-slate-600']: ghost
    }"
  >
    <slot></slot>
  </button>
</template>