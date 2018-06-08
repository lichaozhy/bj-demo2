# bj-demo2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 演示需求概述

1. 具有单点登录区域，包括各业务系统（如检察办公、检务保障、队伍管理、决策支持、检察科技、司法鉴定、日志管理、运维管理等）的快捷入口，以图标方式排列。图标可以由拖拽方式组织顺序。DEMO版本中可以不做实际的系统跳转功能实现。

2. 支持任务列表、通知公告、预警信息展示，展示方式包括但不限列表方式展示。任务列表需要展示的信息包括：时间，系统来源，任务名称，待办/已办标记。通知公告需要展示的信息包括：时间，系统来源，通知公告标题。预警信息需要展示的信息包括：时间，系统来源，预警信息标题。DEMO版本中可以不做实际的后续的处理操作。

3. 邮件系统链接入口。DEMO版本中可不跳转至邮件系统。

4. 全文检索（查询功能）入口。DEMO版本中可不实际挂接检索操作。

5. 办文统计功能展示。可以展示用户本日、本周、本月、本年度的待办工作、草稿、办结工作数量统计。支持领导用户查看下属人员的统计。DEMO中可以使用虚拟数值。展示方式可以使用饼图、柱图或者折线图等。

6. 用户定制模块：用户可以通过简单定制，注册/订阅其他页面的某个栏目，将其展示在主页面上。比如，订阅新浪的体育栏目、搜狐的财经栏目等。

7. 具有良好的用户使用体验(UI设计)，包括但不限于上述模块。

8. 页面内各模块可以通过拖拽方式排列各模块的位置。