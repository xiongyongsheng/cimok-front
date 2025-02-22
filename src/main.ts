/*
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-25 11:04:28
 * @LastEditors: 卢靖康
 */
import 'uno.css';
import 'ant-design-vue/dist/reset.css';
import './design/index.less';
import 'tdesign-vue-next/es/color-picker/style/index.css';

// Register icon sprite
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import App from './App.vue';
import { initAppConfigStore } from '@/logics/initAppConfig';
import { setupErrorHandle } from '@/logics/error-handle';
import { router, setupRouter } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { setupStore } from '@/store';
import { setupGlobDirectives } from '@/directives';
import { setupI18n } from '@/locales/setupI18n';
import { registerGlobComp } from '@/components/registerGlobComp';
import { ColorPicker } from 'tdesign-vue-next';

import '@/utils/tongji';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  // 配置 store
  setupStore(app);

  // Initialize internal system configuration
  // 初始化内部系统配置
  initAppConfigStore();

  // Register global components
  // 注册全局组件
  registerGlobComp(app);

  // Multilingual configuration
  // 多语言配置
  // Asynchronous case: language files may be obtained from the server side
  // 异步案例：语言文件可能从服务器端获取
  await setupI18n(app);

  // Configure routing
  // 配置路由
  setupRouter(app);

  // router-guard
  // 路由守卫
  setupRouterGuard(router);

  // Register global directive
  // 注册全局指令
  setupGlobDirectives(app);

  // Configure global error handling
  // 配置全局错误处理
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.use(ColorPicker);
  app.mount('#app');
}

bootstrap();
