<script setup lang="ts">
import { ref } from "vue";
import Button from "ui/Button.vue";
import ModalCreateTask from "modal/ModalCreateTask.vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = true" :type="'primary'">Add Task</Button>
  <ModalCreateTask v-model:open="open" />
</template>
