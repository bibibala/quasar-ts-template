# Quasar TypeScript 模板

一个功能完整的 Quasar Vue 3 + TypeScript 项目模板。

## ✨ 主要功能

### 🏗️ 技术栈

- **Vue 3** + **TypeScript** + **Quasar Framework**
- **Pinia** 状态管理 + 持久化存储
- **Vue I18n** 国际化支持
- **Vite** 构建工具

### 🌍 国际化系统

- 中英文双语支持
- **智能语言检测** - 基于用户 IP 自动设置语言
- **类型安全的翻译** - TypeScript 智能提示，防止翻译键拼写错误
- Quasar 组件完整国际化

### 🌐 网络请求

- Axios 统一封装
- 请求/响应拦截器
- 文件上传下载支持
- 统一错误处理

### �️ 开发工具

- **ESLint + Prettier** 代码规范
- **Git Hooks** 自动检查
- **TypeScript 严格模式**
- 多环境配置支持

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建项目

```bash
pnpm build
```

## 📁 项目结构

```
src/
├── api/           # API 接口
├── boot/          # Quasar 启动文件
├── components/    # 公共组件
├── hooks/         # Vue 3 Hooks
├── layouts/       # 布局组件
├── pages/         # 页面组件
├── plugins/       # 插件（国际化、HTTP、加密等）
├── router/        # 路由配置
├── stores/        # Pinia 状态管理
├── types/         # TypeScript 类型定义
├── utils/         # 工具函数
└── App.vue        # 根组件
```

## ⚙️ 核心特性说明

### 国际化代码提示

使用 TypeScript 类型推导，为翻译键提供智能提示：

```typescript
const { t } = useI18n();
// 输入 t(" 时自动提示所有可用翻译键
const message = t("message.required"); // ✅ 有智能提示
const invalid = t("invalid.key"); // ❌ TypeScript 报错
```

### 权限路由

```typescript
// 路由配置中添加权限控制
{
  path: '/admin',
  meta: { auth: true }, // 需要登录
  component: AdminPage
}
```

### 状态持久化

```typescript
export const useMyStore = defineStore("myStore", {
    persist: {
        storage: sessionStorage, // 自动持久化
    },
    state: () => ({
        user: null,
    }),
});
```

## 🔧 环境配置

项目支持多环境：

- `.env.development` - 开发环境
- `.env.preview` - 预览环境
- `.env.production` - 生产环境

## 📝 开发命令

```bash
pnpm dev          # 开发模式
pnpm preview      # 预览模式
pnpm build        # 生产构建
pnpm lint         # 代码检查
pnpm format       # 代码格式化
```

## 📄 许可证

MIT License
