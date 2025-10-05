# 🍌 Nano Banana - AI 图像分析工具

一个基于 Next.js 和 Gemini 2.5 Flash Image API 的现代化 AI 图像分析工具，提供智能图像理解和描述功能。

## ✨ 主要功能

- 🖼️ **智能图像上传** - 支持拖拽上传和点击选择
- 🤖 **AI 图像分析** - 基于 Google Gemini 2.5 Flash Image API
- 💬 **自然语言交互** - 使用提示词指导 AI 分析
- ⚡ **实时处理** - 快速的图像分析和结果展示
- 📱 **响应式设计** - 适配所有设备屏幕
- 🎨 **现代化 UI** - 使用 Tailwind CSS 和 shadcn/ui

## 🚀 在线演示

访问 [Nano Banana](https://nanobanana.vercel.app) 体验在线版本

## 🛠️ 技术栈

- **前端框架**: Next.js 14
- **UI 组件**: shadcn/ui + Radix UI
- **样式**: Tailwind CSS
- **AI API**: Google Gemini 2.5 Flash Image (通过 OpenRouter)
- **类型安全**: TypeScript
- **部署**: Vercel

## 🎯 使用方法

1. **上传图片**: 点击上传区域或拖拽图片文件
2. **输入提示词**: 在"Main Prompt"中描述你想要的分析内容
3. **生成分析**: 点击"Generate Now"按钮
4. **查看结果**: AI 分析结果将显示在"Output Gallery"中

### 示例提示词

- "描述这张图片中的主要内容"
- "分析图片中的色彩搭配"
- "识别图片中的物体和场景"
- "提取图片中的文字内容"

## 🔧 本地开发

### 环境要求

- Node.js 18+
- npm 或 pnpm

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/wjeing/nanobanana.git
   cd nanobanana
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   pnpm install
   ```

3. **配置环境变量**
   创建 `.env.local` 文件：
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   pnpm dev
   ```

5. **访问应用**
   打开 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 🌐 部署到 Vercel

1. **连接 GitHub**
   - 在 Vercel 中导入此仓库

2. **设置环境变量**
   - 在 Vercel 项目设置中添加 `OPENROUTER_API_KEY`

3. **自动部署**
   - 推送到 `master` 分支即可触发自动部署

## 🔑 API 配置

项目使用 OpenRouter 访问 Google Gemini 2.5 Flash Image API：

1. 访问 [OpenRouter](https://openrouter.ai) 创建账户
2. 获取 API 密钥
3. 在环境变量中配置密钥

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   └── generate/      # Gemini API 集成
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx          # 首页
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件
│   ├── editor-section.tsx # 主编辑器组件
│   ├── header.tsx        # 头部组件
│   └── ...              # 其他组件
├── lib/                  # 工具函数
├── public/              # 静态资源
└── styles/             # 样式文件
```

## 🎨 主要组件

- **EditorSection**: 核心编辑器，包含图片上传和 AI 分析功能
- **Header**: 导航栏和主题切换
- **Hero**: 首页展示区域
- **Features**: 功能特性展示

## 🔧 自定义配置

### API 路由
位于 `app/api/generate/route.ts`，处理图像分析请求

### 组件库
使用 shadcn/ui，可通过以下命令添加新组件：
```bash
npx shadcn-ui@latest add [component-name]
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👨‍💻 作者

- **wjeing** - [GitHub](https://github.com/wjeing)

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [OpenRouter](https://openrouter.ai/) - AI API 服务
- [Google Gemini](https://deepmind.google/technologies/gemini/) - AI 模型

---

⭐ 如果这个项目对你有帮助，请给它一个星标！