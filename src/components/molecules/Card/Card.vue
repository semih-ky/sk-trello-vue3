<script setup lang="ts">
import { ref } from 'vue';
import Text from '@/components/atoms/Text/Text.vue';
import CardEdit from '@/components/organisms/CardEdit/CardEdit.vue';
import type { ID, Task } from '@/types';


withDefaults(defineProps<{
  task: Task,
  draggable?: boolean
}>(), {
  draggable: true
});

const open = ref(false);

</script>

<template>
  <div>
    <div 
      @click="open = true"
      class="flex mt-4 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded p-4 cursor-pointer relative"
    >
      <v-icon v-if="draggable" name="oi-grabber" class="card-grabber absolute top-1.5 left-1 text-slate-300 cursor-move"/>
      <div class="ml-3">
        <Text>
          {{ task.text }}
        </Text>
      </div>
      <div v-if="task.done" class="absolute text-green-400 top-0 right-1">
        <v-icon name="oi-check" />
      </div>
    </div>
    <Teleport to="#modal">
      <CardEdit :open="open" @close="open = false" :task="task"  />
    </Teleport>
  </div>
</template>