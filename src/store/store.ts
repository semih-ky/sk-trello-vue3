import { ref, toRaw } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { ID, List, Task } from '@/types'
import { sampleData } from './mock'

export const useStore = defineStore("store", () => {
  const lists = useStorage('lists', sampleData);
  const searchResult = ref<Task[]>([]);
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

  const searchTrigger = (is: boolean): void => {
    isSearch.value = is;
  }

  const findCards = <T extends Task["text"]>(text: T) => {
    if (!text.length) {
      searchResult.value = [];
      return
    }
    const regex = new RegExp(text, 'i');
    const allList = toRaw(lists.value);
    let foundCards: Task[] = [];
    allList.forEach(list => {
      const cards = list.tasks.filter(task => regex.test(task.text));
      foundCards.push(...cards);
    })
    searchResult.value = foundCards
  }
  
  return { 
    lists, 
    searchResult, 
    isSearch, 
    addList, 
    removeList, 
    updateListTitle, 
    findCards, 
    searchTrigger 
  }
})