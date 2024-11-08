# JavaScript 交付 SDK
https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference#assets-where

> **注意**：我们建议使用TypeScript Delivery SDK作为优于 JavaScript Delivery SDK 的首选选项，以获得项目中的最佳性能和增强功能。学习从 JavaScript 无缝迁移到 TypeScript 。

## Prerequisite 先决条件
您需要安装Node.js 版本 20 或更高版本才能使用 Contentstack JavaScript Delivery SDK。


## Setup and Installation 设置和安装
使用 Javascript SDK 来创建应用程序。要使用 JavaScript Delivery SDK，请通过 npm 安装
```bash
npm i contentstack
```

To import the SDK in your project, use the following command:
要将 SDK 导入到您的项目中，请使用以下命令：
```js
import Contentstack from 'contentstack';
```

To initialize the SDK, you will need to specify the API Key, Delivery Token, and Environment Name of your stack.
要初始化 SDK，您需要指定 API 密钥、交付令牌和堆栈的环境名称。
```js
const Stack = Contentstack.Stack({
  "api_key": "api_key",
  "delivery_token": "delivery_token",
  "environment": "environment",
  region,
  live_preview
});
```
实际项目中的代码
```js
export const Stack = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY ? process.env.CONTENTSTACK_API_KEY : process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
  region: process.env.CONTENTSTACK_REGION ? process.env.CONTENTSTACK_REGION : 'us',
  live_preview: {
    enable: true,
    host: process.env.CONTENTSTACK_PREVIEW_HOST,
    preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN
  },
});
```

# Quickstart in 5 mins 5 分钟快速入门

## Initializing your SDK 初始化您的 SDK
您需要指定 API 密钥、交付令牌和堆栈的环境名称来初始化 SDK：
```js
const Stack = Contentstack.Stack({
  "api_key": "api_key",
  "delivery_token": "delivery_token",
  "environment": "environment"
});
```
Once you have initialized the SDK, you can start getting content in your app.
初始化 SDK 后，您就可以开始在应用程序中获取内容。

## Querying content 从堆栈中查询内容
要获取单个条目，您需要指定内容类型以及条目的 ID。

```js
const Stack = Contentstack.Stack({
  "api_key": "api_key",
  "delivery_token": "delivery_token",
  "environment": "environment"
});
const entry = Stack.ContentType('blog').Entry("entry_uid");
const result = await entry.toJSON().fetch();
```

从 Develop Tool 获取的示例代码
```js
//Get a Single Entry
const Query = Stack.ContentType("page").Entry("blt8931f0faf803fb07")
.toJSON()
.fetch()
.then(
  function success(entry) {
    console.log(entry["title"]);
    // Retrieve field value by providing a field's uid
    console.log(entry.toJSON());
    // Convert the entry result object to JSON
  },
  function error(err) {
    // err object
  }
);
```
使用 async/await
```js
// Define an async function to fetch the entry
async function fetchEntry() {
  try {
    // Get a Single Entry
    const entry = await Stack.ContentType("page").Entry("blt8931f0faf803fb07")
      .toJSON()
      .fetch();

    console.log(entry["title"]); // Log the title
    console.log(entry.toJSON());  // Log the entire entry as JSON
  } catch (err) {
    console.error(err); // Handle error
  }
}
```

要检索内容类型的多个条目，您需要指定内容类型 uid。您还可以指定搜索参数来过滤结果。
```js
const Query = Stack.ContentType('blog').Query();
Query.where("title", "welcome")
.includeSchema()
.includeCount()
.toJSON()
.find()
.then((result) => {
})
.catch((error))=> {
});
```

## getContentTypes 获取内容类型
此方法返回您帐户中特定堆栈的所有内容类型的综合信息。

```js
const result = await Stack.getContentTypes({"include_global_field_schema": true});
```


# Contentstack JavaScript Utils SDK:
https://www.npmjs.com/package/@contentstack/utils
