<script setup lang="ts">
import { ref } from "vue";
import Button from "ui/Button.vue";
import Modal from "../components/ui/Modal.vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = true" type="primary">Add Task</Button>
  <Modal v-model:open="open" />
</template>
