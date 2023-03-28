<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/atoms/Button/Button.vue';
import type { TaskRaw } from '@/types';
import { onClickOutside, useTextareaAutosize } from '@vueuse/core'

const emit = defineEmits<{
  (e: "add", payload: TaskRaw ): void
}>();

const addCardContainer = ref<HTMLElement | null>(null);
const isAdd = ref(false)
const toggleAdd = () => isAdd.value = !isAdd.value

const { textarea, input } = useTextareaAutosize() 
onClickOutside(addCardContainer, (e) => isAdd.value = false);

watch(isAdd, () => {
  if (isAdd.value) {
    nextTick(() => {
      textarea.value?.focus()
    })
  } else {
    input.value = ""
  }
})

const addTask = () => {
  if (input.value.length < 1) return;
  emit("add", {
    id: uuidv4(),
    text: input.value,
    done: false
  })
  isAdd.value = false;
}
const cancelTask = () => {
  input.value = "";
  isAdd.value = false;
}

</script>

<template>
  <div class="mt-6">
    <div 
      v-if="isAdd"
      ref="addCardContainer"
      class="relative"
    >
      <textarea
        v-model="input"
        ref="textarea"
        class="w-full p-2 pl-7 pr-16 bg-slate-700 rounded text-sm text-slate-300 focus:outline-none"
        @keydown.enter="addTask"
      >
      </textarea>
      <div class="absolute top-0 right-0 flex justify-end gap-2 p-2">
        <v-icon
          v-show="input?.length > 0"
          @click="addTask" 
          name="oi-check" 
          class="bg-slate-600 hover:bg-slate-500 active:bg-slate-400 rounded cursor-pointer text-green-400" 
        />
        <v-icon
          @click="cancelTask" 
          name="oi-x" 
          class="bg-slate-600 hover:bg-slate-500 active:bg-slate-400 rounded cursor-pointer text-pink-500" 
        />
      </div>
    </div>
    <Button v-if="!isAdd" @click="toggleAdd" variant="ghost">
      <v-icon name="oi-plus" />
      Add a card
    </Button>
  </div>
</template>