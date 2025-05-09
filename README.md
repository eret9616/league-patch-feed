# League of Legends Patch Notes RSS Feed

这是一个英雄联盟补丁说明的RSS订阅源，部署在Vercel上。

## 功能

- 自动抓取英雄联盟官方补丁说明
- 生成RSS订阅源
- 支持图片和详细描述

## 部署

1. Fork 这个仓库
2. 在 [Vercel](https://vercel.com) 上导入你的仓库
3. 部署完成后，你的RSS订阅地址将是：`https://你的域名/api/rss`

## 本地开发

```bash
# 安装依赖
npm install

# 本地运行
npm run dev
```

## 技术栈

- Node.js
- Axios
- Cheerio
- RSS
- Vercel Serverless Functions

## 注意事项

- 请确保遵守英雄联盟官方网站的使用条款
- 建议适当设置请求间隔，避免频繁请求 