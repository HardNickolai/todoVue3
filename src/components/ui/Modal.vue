<script setup lang="ts">
import { Modal } from "ant-design-vue";

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();
</script>

<template>
  <Modal
    :open="props.open"
    @update:open="emit('update:open', $event)"
    title="Пример"
  >
    <slot />
  </Modal>
</template>
