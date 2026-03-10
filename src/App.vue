<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { THEME } from "./constants";
</script>

<template>
  <ConfigProvider :theme="THEME">
    <router-view />
  </ConfigProvider>
</template>
