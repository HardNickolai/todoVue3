<script setup lang="ts">
import { Button } from "ant-design-vue";

const props = defineProps<{
  type?: "primary" | "default" | "dashed" | "text" | "link";
}>();
</script>

<template>
  <Button :type="type">
    <slot />
  </Button>
</template>
