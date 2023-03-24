<script setup lang="ts">

import Button from '@/components/atoms/Button/Button.vue';
import AddListDialog from '@/components/organisms/AddListDialog/AddListDialog.vue';
import { useStore } from '@/store/store';
import { ref } from 'vue';

const store = useStore()

const open = ref(false);

</script>

<template>
  <Button @click="open = true">
    <v-icon name="oi-plus" />
    Add List
  </Button>
  <Teleport to="#modal">
    <AddListDialog :open="open" @close="open = false"/>
  </Teleport>
</template>