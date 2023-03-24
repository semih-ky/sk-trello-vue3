<script setup lang="ts">
import Card from '@/components/molecules/Card/Card.vue';
import { useStore } from '@/store/store';
import type { ID } from '@/types';

const store = useStore();

const deleteHandler = (id: ID) => {
  const index = store.searchResult.findIndex(task => task.id === id);
  store.searchResult.splice(index, 1)
}

</script>

<template>
  <div class="flex-1 rounded mx-4 my-12 p-6 bg-slate-800" >
    <p>Search Result</p>
    <div v-if="!store.searchResult.length" class="h-40 grid place-items-center text-slate-400">
      <p>No Result</p>
    </div>
    <div class="flex flex-col min-[670px]:flex-wrap min-[670px]:flex-row min-[670px]:gap-4">
      <div v-for="task in store.searchResult" class="w-full min-[670px]:w-[287px]">
        <Card :key="task.id" :task="task" :draggable="false" @delete="deleteHandler" />
      </div>
    </div>
  </div>
</template>