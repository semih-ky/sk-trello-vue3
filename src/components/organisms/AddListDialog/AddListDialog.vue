<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Modal from '@/components/atoms/Modal/Modal.vue';
import Button from '@/components/atoms/Button/Button.vue';
import { useStore } from '@/store/store';

defineProps<{
  open: boolean,
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const store = useStore()

const title = ref("")

const addListHandler = () => {
  if (!title.value.length) return
  store.addList({
    id: uuidv4(),
    title: title.value,
    tasks: []
  })
  title.value = "";
  emit('close');
}

</script>

<template>
  <Modal :open="open" @overlay="$emit('close')">
    <template #header >
      <div class="flex items-center gap-2 mb-4">
        <v-icon name="oi-pencil"  scale="1.25" />
        <p>Add List</p>
        <v-icon name="oi-x" @click="$emit('close')" scale="1.5" class="ml-auto cursor-pointer" />
      </div>
    </template>
    
    <template #main >
      <input v-model="title" type="text" placeholder="List title" class="w-full p-2 rounded bg-slate-700 focus:outline-none placeholder:italic placeholder:font-light placeholder:text-sm placeholder:text-slate-500" />
    </template>
    
    <template #footer >
      <div class="flex gap-2 justify-end mt-4" >
        <Button variant="primary" @click="addListHandler">Add</Button>
      </div>
    </template>
  </Modal>
</template>