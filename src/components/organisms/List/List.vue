<script setup lang="ts">
import ListHeader from '@/components/molecules/ListHeader/ListHeader.vue';
import ListBody from '@/components/molecules/ListBody/ListBody.vue';
import type { List } from '@/types';

defineProps<{
  list: List
}>();

</script>

<template>
  <div class="min-w-[335px] w-[335px] min-h-[200px] p-6 rounded bg-slate-800">
    <ListHeader :id="list.id" :title="list.title" />
    <ListBody :tasks="list.tasks" :list-id="list.id" />
  </div>
</template>