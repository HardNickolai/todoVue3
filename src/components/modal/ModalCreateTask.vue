<script setup lang="ts">
import { computed } from "vue";
import Modal from "ui/Modal.vue";

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const model = computed({
  get: () => props.open,
  set: (v) => emit("update:open", v),
});
</script>

<template>
  <Modal v-model:open="model">
    <div>MODAL</div>
  </Modal>
</template>
