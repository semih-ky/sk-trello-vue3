<script setup lang="ts">
import List from '../List/List.vue';
import { useStore } from '@/store/store';
import draggable from 'vuedraggable';

const store = useStore(); 
</script>



<template>
  <draggable
    class="flex items-start gap-4 px-4 py-12 overflow-auto flex-1"
    ghost-class="ghost-list"
    v-model="store.lists"
    handle=".list-grabber"
    item-key="id"
    group="lists"
  >
    <template #item="{element}">
      <List :key="element.id" :list="element" />
    </template>
  </draggable>
</template>

<style>
.ghost-list {
  @apply opacity-30 border border-slate-400
}
</style>