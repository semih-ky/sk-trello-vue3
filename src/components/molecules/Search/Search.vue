<script setup lang="ts">
import { useStore } from '@/store/store';

const store = useStore();

const searchHandler = (e:Event) => {
  const el = e.target as HTMLInputElement;
  store.$patch({
    searchInput: el.value
  })
}

const searchCancel = () => {
  store.$patch({
    searchInput: ""
  })
}

</script>

<template>
  <div class="flex items-center max-w-[300px] bg-slate-700 p-2 rounded cursor-pointer">
    <input type="text" :value="store.searchInput" @input="searchHandler" id="search" class="peer/search order-2 w-full bg-inherit focus:outline-none placeholder:italic placeholder:font-light placeholder:text-sm placeholder:text-slate-500" placeholder="Search tasks" />
    <label for="search" class="order-1 text-slate-500 peer-focus/search:text-inherit">
      <v-icon name="oi-search" class="mr-2 cursor-pointer"/>
    </label>
    <v-icon @mousedown="searchCancel" name="oi-x" class="!hidden peer-focus/search:!inline-block ml-2 cursor-pointer order-3"/>
  </div>
</template>