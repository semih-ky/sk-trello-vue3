<script setup lang="ts">
import Modal from '@/components/atoms/Modal/Modal.vue';
import Button from '@/components/atoms/Button/Button.vue';
import { useStore } from '@/store/store';
import type { ID } from '@/types';

defineProps<{
  open: boolean,
  title: string,
  id: ID 
}>()

defineEmits<{
  (e: 'close'): void
}>()

const store = useStore()

</script>

<template>
  <Modal :open="open" @overlay="$emit('close')">
    <template #header >
      <div class="flex items-center gap-2 text-pink-700">
        <v-icon name="oi-alert" animation="pulse" scale="1.5" />
        <p>Alert!</p>
      </div>
    </template>
    
    <template #main >
      <p>Are you sure about <strong>deleting</strong>&nbsp;
        <span class="italic">{{ title }}</span> ?
      </p>
    </template>
    
    <template #footer >
      <div class="flex gap-2 justify-end" >
        <Button variant="alert" @click="store.removeList(id)" >Yes</Button>
        <Button variant="ghost" @click="$emit('close')">No</Button>
      </div>
    </template>
  </Modal>
</template>