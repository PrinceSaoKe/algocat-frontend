<template>
  <div id="globalHeader">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <div class="title-bar">
          <img class="logo" src="@/assets/logo.png" />
          <div class="title">AlgoCat</div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">{{
        item.name
      }}</a-menu-item>
    </a-menu>
  </div>
</template>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  width: 48px;
}

.title {
  color: #444;
  margin-left: 16px;
}
</style>

<script setup>
import { routes } from "@/router/routes.ts";
</script>
