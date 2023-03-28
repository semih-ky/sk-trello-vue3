<script setup lang="ts">
import draggable from 'vuedraggable';
import Card from '../Card/Card.vue';
import AddCard from '../AddCard/AddCard.vue';
import type { ID, Task } from '@/types'
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/store';

defineProps<{
  tasks: Task[],
  listId: ID
}>()

const store = useStore();
const { getTasksByListId } = storeToRefs(store);

const dragEndHandler = (event: any) => {
  const fromEl = event.from as HTMLElement;
  const toEl = event.to as HTMLElement;
  const taskEl = event.item as HTMLElement;

  const fromListId = fromEl.dataset.listid;
  const toListId = toEl.dataset.listid;
  const taskId = taskEl.dataset.taskid;

  store.updateTaskListId(toListId, taskId)
}

</script>

<template>
  <draggable
    :list="getTasksByListId(listId)"
    :data-listId="listId"
    class="min-h-[52px]"
    handle=".card-grabber"
    item-key="id"
    group="cards"
    ghost-class="ghost-card"
    drag-class="drag-card"
    @end="dragEndHandler"
  >
    <template #item="{element}">
      <Card :key="element.id" :task="element" :draggable="true" :data-taskid="element.id" />
    </template>
  </draggable>
  <AddCard @add="store.addTask(listId, $event)" />
</template>

<style>
.drag-card > div {
  @apply rotate-6 
}

.ghost-card > div {
  @apply bg-slate-400 
}
</style>