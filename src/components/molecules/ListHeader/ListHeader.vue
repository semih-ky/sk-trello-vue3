<script setup lang="ts">
import { ref } from 'vue';
import Title from '@/components/atoms/Title/Title.vue';
import DeleteListAlert from '@/components/organisms/DeleteListAlert/DeleteListAlert.vue';
import type { ID } from '@/types';

defineProps<{
  id: ID,
  title: string
}>();

const open = ref(false);

</script>

<template>
  <header class="flex items-center gap-1 ">
    <v-icon name="oi-grabber" class="list-grabber text-slate-300 cursor-move" />
    <Title :id="id" :title="title" />
    <v-icon @click="open = true" name="oi-trash" class="text-pink-500 cursor-pointer ml-auto" />
  </header>
  <Teleport to="#modal">
    <DeleteListAlert :id="id" :title="title" :open="open" @close="open = false"/>
  </Teleport>
</template>