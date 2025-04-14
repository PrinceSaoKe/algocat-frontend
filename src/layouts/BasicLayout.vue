<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header"><GlobalHeader /></a-layout-header>
      <a-layout-content class="content"><router-view /></a-layout-content>
      <a-layout-footer class="footer">AlgoCat by 骚客</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}

.footer {
  background-color: #42b983;
  text-align: center;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<script setup>
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
