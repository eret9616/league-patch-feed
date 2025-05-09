# League of Legends Patch Notes RSS Generator

这是一个简单的 Node.js 应用程序，用于抓取英雄联盟官方网站的补丁说明并生成 RSS 订阅源。

## 功能特点

- 自动抓取最新的补丁说明
- 生成标准 RSS 订阅源
- 提供 HTTP 接口访问 RSS 内容

## 安装

1. 克隆此仓库
2. 安装依赖：
```bash
npm install
```

## 使用方法

1. 启动服务器：
```bash
npm start
```

2. 访问 RSS 订阅源：
打开浏览器访问 `http://localhost:3000/rss`

## 技术栈

- Node.js
- Express.js
- Axios
- Cheerio
- RSS

## 注意事项

- 请确保遵守英雄联盟官方网站的使用条款
- 建议适当设置请求间隔，避免频繁请求 