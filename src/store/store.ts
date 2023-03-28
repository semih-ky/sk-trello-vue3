import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { ID, List, Task, TaskRaw } from '@/types'
import { sampleData } from './mock'

export const useStore = defineStore("store", () => {
  const lists = useStorage('lists', sampleData);
  const searchInput = ref("");
  const isSearch = ref(false);
  
  const updateListTitle = (id: ID, title: string): void  => {
    const index = lists.value.findIndex(list => list.id === id)
    lists.value[index].title = title
  }

  const addList = (obj: List): void => {
    lists.value.unshift(obj);
  }

  const removeList = (id: ID): void => {
    const index = lists.value.findIndex(list => list.id === id)
    lists.value.splice(index, 1)
  }

  const addTask = (listId: ID, obj: TaskRaw): void => {
    const index = lists.value.findIndex(list => list.id === listId)
    lists.value[index].tasks.push({
      listId: listId,
      ...obj
    });
  }

  const deleteTask = (listId: ID, taskId: ID): void => {
    const listIndex = lists.value.findIndex(list => list.id === listId);
    const taskIndex = lists.value[listIndex].tasks.findIndex(task => task.id === taskId);
    lists.value[listIndex].tasks.splice(taskIndex, 1);
  }

  const updateTaskListId = 
  (listId: ID | undefined, taskId: ID | undefined): void => {
    if (!listId || !taskId) return;
    const listIndex = lists.value.findIndex(list => list.id === listId);
    const taskIndex = lists.value[listIndex].tasks.findIndex(task => task.id === taskId);
    lists.value[listIndex].tasks[taskIndex].listId = listId
  }

  const getTasksByListId = computed(() => (listId: ID) => {
    const list = lists.value.find((list) => list.id === listId);
    return list?.tasks
  })

  const searchResult = computed(() => {
    const text = searchInput.value;
    if (text.length > 0) {
      const regex = new RegExp(text, 'i');
      let foundCards: Task[] = [];
      lists.value.forEach(list => {
        const cards = list.tasks.filter(task => regex.test(task.text));
        foundCards.push(...cards);
      })
      return foundCards

    } else {
      return []
    }
  })

  watch(searchInput, () => {
    if (searchInput.value.length) {
      isSearch.value = true;
    } else isSearch.value = false
  })
  
  return { 
    lists, 
    searchResult, 
    isSearch, 
    searchInput,
    addList, 
    removeList, 
    addTask,
    deleteTask,
    updateListTitle,
    updateTaskListId, 
    getTasksByListId 
  }
})