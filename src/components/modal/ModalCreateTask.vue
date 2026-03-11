<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import type { FormState } from "interface/modal";
import type { FormInstance } from "ant-design-vue";
import Modal from "ui/Modal.vue";
import Button from "ui/Button.vue";

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

const formRef = ref<FormInstance | null>(null);
const formState = reactive<FormState>({
  title: "",
  isDone: true,
});

const isDisabled = ref(true);

const createTask = () => {
  console.log({ ...formState });
};

watch(
  formState,
  async () => {
    try {
      await formRef.value?.validate();
      isDisabled.value = false;
    } catch (error) {
      isDisabled.value = true;
    }
  },
  { deep: true },
);
</script>

<template>
  <Modal v-model:open="model" :title="'Create Task'">
    <a-form :model="formState" ref="formRef">
      <a-form-item
        label="Name task"
        name="title"
        :rules="[{ required: true, message: 'Please input name task!' }]"
      >
        <a-input v-model:value="formState.title" />
      </a-form-item>
      <a-form-item name="isDone">
        <a-checkbox v-model:checked="formState.isDone"> Done </a-checkbox>
      </a-form-item>
    </a-form>
    <template #footer>
      <Button @click="() => (model = false)">Cancel</Button>
      <Button @click="createTask" :disabled="isDisabled" :type="'primary'"
        >Ok</Button
      >
    </template>
  </Modal>
</template>
