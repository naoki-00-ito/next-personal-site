---
title: CSSで親要素のwidthを無視して背景を画面幅いっぱいに広げる方法
description: 'CSSで親要素のwidthを無視して背景を画面幅いっぱいに広げる方法をご紹介します。'
category: [tech]
tags: [sass,css]
date: '2023-03-16'
---

本記事では親要素のwidthを無視して背景を広げる方法をご紹介します。

## 調整前構造

### HTML

```html
<div class="p-hoge">
  <div class="p-hoge__bg">
    <p class="p-hoge__text">texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
  </div>
</div>
```

### CSS

```css

.p-hoge {
  width: 100%;
}

.p-hoge__bg {
  background-color: #f00;
}
```

### 表示イメージ

<style>

.p-hoge {
  width: 100%;
}

.p-hoge__bg {
  background-color: #f00;
}

.p-hoge__bg--full {
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);
}

.p-hoge__text {
  word-wrap: break-word;
  margin: 0 !important;
  
}
</style>

<div class="p-hoge">
  <div class="p-hoge__bg">
    <p class="p-hoge__text">
texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
    </p>
  </div>
</div>
 
※青背景部分が`.l-main`, 赤背景部分が`p-hoge`

## 背景を画面幅いっぱいに広げるCSSを追記する

```css
.p-hoge__bg {
  background-color: #f00;
  /*  ↓ Add */
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);
  /*  ↑ Add */
}
```

## 下記のように背景が画面幅いっぱいになります

<div class="p-hoge">
  <div class="p-hoge__bg p-hoge__bg--full">
    <p class="p-hoge__text">
texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
    </p>
  </div>
</div>

## Sassを使う場合はmixinを作っておくと便利です

```scss
@mixin contents-full {
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);
}
```

GitHubでよく使うmixinを公開していますのでご参考ください！

https://github.com/naoki-00-ito/flocss-set/blob/master/scss/_foundation/_mixin.scss

