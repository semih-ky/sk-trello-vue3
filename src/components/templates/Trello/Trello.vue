<script setup lang="ts">
import Board from '@/components/organisms/Board/Board.vue';
import SearchResult from '@/components/organisms/SearchResult/SearchResult.vue';
import Header from '@/components/organisms/Header/Header.vue';
import Code from '@/components/atoms/Code/Code.vue';
import { useStore } from '@/store/store';

const store = useStore()

</script>

<template>
  <div class="flex flex-col w-screen min-h-[100dvh] relative">
    <Header />
    <div v-if="store.isSearch">
      <SearchResult />
    </div>
    <div v-else>
      <Board />
    </div>
    <Code />
  </div>
</template>