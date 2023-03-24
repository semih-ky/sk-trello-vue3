<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import Card from '../Card/Card.vue';
import AddCard from '../AddCard/AddCard.vue';
import type { ID, Task } from '@/types'

const props = defineProps<{
  tasks: Task[]
}>()

const taskList = ref<Task[]>(props.tasks);

const deleteCardHandler = (id: ID) => {
  const index = taskList.value.findIndex(task => task.id === id);
  taskList.value.splice(index, 1)
}

</script>

<template>
  <draggable
    v-model="taskList"
    handle=".card-grabber"
    item-key="id"
    group="cards"
    ghost-class="ghost-card"
    drag-class="drag-card"
  >
    <template #item="{element}">
      <Card :key="element.id" :task="element" :draggable="true" @delete="deleteCardHandler"/>
    </template>
  </draggable>
  <AddCard @add="taskList.push($event)" />
</template>

<style>
.drag-card > div {
  @apply rotate-6 
}

.ghost-card > div {
  @apply bg-slate-400 
}
</style>