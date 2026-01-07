import type { RouteRecordRaw } from 'vue-router'
import { LOGIN_NAME } from '@/router/constant'

/**
 * layout布局之外的路由
 */
export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: LOGIN_NAME,
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
}

export const OAuthCallbackRoute: RouteRecordRaw = {
  path: '/login/oauth-callback',
  name: 'OAuthCallback',
  component: () => import('@/views/login/oauth-callback.vue'),
  meta: {
    title: '第三方登录中',
  },
}

export default [LoginRoute, OAuthCallbackRoute]
