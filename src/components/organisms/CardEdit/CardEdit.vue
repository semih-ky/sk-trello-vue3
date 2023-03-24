<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useTextareaAutosize } from '@vueuse/core';
import Button from '@/components/atoms/Button/Button.vue';
import Modal from '@/components/atoms/Modal/Modal.vue';
import Checkbox from '@/components/atoms/Checkbox/Checkbox.vue';
import type { ID, Task } from '@/types';

const props = defineProps<{
  open: boolean,
  task: Task
}>()

const emit = defineEmits<{
  (e: 'close'): void,
  (e: 'delete', payload: ID): void
}>()

const { textarea, input } = useTextareaAutosize()
const isDone = ref(props.task.done)

const saveInfo = computed(() => {
  if (
    props.task.done !== isDone.value ||
    props.task.text !== input.value
  ) return "This task has not saved!"
  return ""
})

const saveHandler = () => {
  props.task.done = isDone.value;
  props.task.text = input.value;
  emit('close')
}

onMounted(() => {
  input.value = props.task.text
})
</script>

<template>
  <Modal :open="open" @overlay="$emit('close')">
    <template #header >
      <div class="flex items-center gap-2 mb-4">
        <v-icon name="oi-pencil"  scale="1.25" />
        <p>Edit</p>
        <v-icon name="oi-x" @click="$emit('close')" scale="1.5" class="ml-auto cursor-pointer" />
      </div>
    </template>
    
    <template #main >
      <div class="mb-6">
        <textarea 
          ref="textarea" 
          v-model="input"
          class="w-full min-[428px]:min-w-[335px] p-2 bg-slate-700 rounded text-sm text-slate-300 focus:outline-none"
        >
        </textarea>
        <div class="mt-5">
          <Checkbox id="id" :checked="isDone" @checked="isDone = $event">
            Done
          </Checkbox>
        </div>
        <p class="mt-4 text-slate-400">{{ saveInfo }}</p>
      </div>
    </template>
    
    <template #footer >
      <div class="flex gap-2 justify-end" >
        <Button variant="primary" @click="saveHandler">Save</Button>
        <Button variant="alert" @click="$emit('delete', task.id)">Delete</Button>
      </div>
    </template>
  </Modal>
</template>