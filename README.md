# hg

## 该组件已经上传到 npm

### 安装方法：

```bash
npm i @huanghuangzuishuai/hgui-v3
```

### 使用方法：

> 在 vue 项目的 main.js 中

```js
import hguiv3 from "@huanghuangzuishuai/hgui-v3/packages/index";

app.use(hguiv3);
```

### [vue2 版本链接](https://github.com/codehuang99/hgv2)

### 这是一个链接 [演示地址](http://36.111.190.68:2222/)

> 组件使用（以按钮为例）
>
> <hg-button>按钮</hg-button>

### 组件样例

> 可以 clone 并运行本项目，在 App.vue 可以看到效果

```
git clone
npm i
npm run serve
```

### Button 属性

| 属性名   | 说明     | 类型    | 默认值 |
| -------- | -------- | ------- | ------ |
| type     | 类型     | String  | -      |
| size     | 大小     | String  | middle |
| disabled | 是否禁用 | Boolean | false  |
| circle   | 是否椭圆 | Boolean | false  |

### selector 属性

| 属性名 | 说明 | 类型  | 默认值 |
| ------ | ---- | ----- | ------ |
| data   | 类型 | Array | -      |

### input 属性

| 属性名       | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| type         | 类型         | String  | text   |
| size         | 大小         | String  | middle |
| clearable    | 是否清除     | Boolean | false  |
| showPassword | 是否显示密码 | Boolean | false  |
| v-model      | 数据         | -       | -      |

### Radio 属性

| 属性名  | 说明 | 类型   | 默认值 |
| ------- | ---- | ------ | ------ |
| label   | 值   | String | -      |
| v-model | 数据 | -      | -      |

### Checkbox 属性

| 属性名  | 说明 | 类型   | 默认值 |
| ------- | ---- | ------ | ------ |
| label   | 值   | String | -      |
| v-model | 数据 | -      | -      |

### dialog 属性

| 属性名  | 说明     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| v-model | 数据     | -      | -      |
| title   | 标题     | String | -      |
| cancel  | 取消方法 | method | -      |
| confirm | 确定方法 | method | -      |
