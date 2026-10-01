---
title: Fumika 文章使用指南
published: 2024-04-01
description: 新建文章、填写 Frontmatter 和管理文章图片的简要说明。
image: "./cover.jpg"
tags: [Fumika, 写作, 指南]
category: 开发参考
ogImage: "/media/images/guide-cover.jpg"
draft: true
---

## 文章 Frontmatter

```yaml
---
title: 我的第一篇文章
published: 2026-10-01
updated: 2026-10-02
description: 显示在主页和搜索结果中的摘要。
image: "./cover.jpg"
tags: [随笔, 生活]
category: 日常
draft: false
---
```

- `title`：文章标题，必填。
- `published`：发布日期，必填，也是主页排序依据。
- `updated`：最后更新日期，可选。
- `description`：主页卡片和 SEO 摘要。
- `image`：封面图片，可用网络地址、`public/` 路径或文章相对路径。
- `tags`：标签数组。
- `category`：文章分类。
- `draft`：设为 `true` 时不会进入正式构建。

## 文件放置方式

简单文章可以使用单个文件：

```text
src/content/posts/我的文章.md
```

包含图片时，推荐使用目录：

```text
src/content/posts/我的文章/
├── index.md
└── cover.jpg
```

可以运行以下命令创建新文章：

```sh
pnpm new-post my-post
```

