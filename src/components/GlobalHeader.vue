<template>
  <a-row id="globalHeader" align="center" style="margin-bottom: 16px">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
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
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
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

<script setup lang="ts">
import { routes } from "@/router/routes.ts";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

setTimeout(() => {
  console.log("开始");
  store.dispatch("user/getLoginUser", {
    userName: "骚客",
  });
}, 3000);

const selectedKeys = ref(["/"]);

router.afterEach((to) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push(key);
};
</script>
