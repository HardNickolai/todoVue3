<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";

const theme = {
  token: {
    colorPrimary: "#8bc34a",
  },
};
</script>

<template>
  <ConfigProvider :theme="theme">
    <router-view />
  </ConfigProvider>
</template>
