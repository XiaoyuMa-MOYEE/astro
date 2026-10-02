---
title: Markdown 扩展语法
published: 2024-01-04
description: Fumika 提供的提示框、仓库卡片、遮罩文字和注音语法。
tags: [Markdown, 扩展语法]
category: 开发参考
draft: true
---

## GitHub 仓库卡片

```markdown
::github{repo="iyanarmanda/fumika"}
```

## 提示框

支持 `note`、`tip`、`important`、`warning` 和 `caution`。

```markdown
:::note
这里是普通提示。
:::

:::warning[自定义标题]
这里是警告内容。
:::
```

也可以使用 GitHub 风格写法：

```markdown
> [!TIP]
> 这里是一条建议。
```

## 遮罩文字

```html
<spoiler>鼠标移入后显示的内容</spoiler>
```

## 注音

```markdown
{汉字}(hàn zì)
```

## 文字方向

```markdown
:::dir{dir="rtl"}
从右向左显示的文字。
:::
```

