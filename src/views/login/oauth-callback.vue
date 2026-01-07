<script setup lang="ts">
import { onMounted } from "vue";
import { message } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

onMounted(async () => {
  const token = route.query.token as string;

  if (token) {
    try {
      // 执行 OAuth 登录操作
      await userStore.oauthLogin(token);

      message.success("登录成功！");
      // 跳转到首页或之前的页面
      const redirect = route.query.state || "/";
      router.replace(redirect as string);
    } catch (error: any) {
      console.error("OAuth 登录失败:", error);
      message.error(error.message || "登录失败，请重试");
      router.replace("/login");
    }
  } else {
    message.error("登录失败：未获取到授权信息");
    router.replace("/login");
  }
});
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="text-center">
      <a-spin size="large" />
      <div class="mt-4 text-lg">正在完成登录，请稍候...</div>
    </div>
  </div>
</template>
