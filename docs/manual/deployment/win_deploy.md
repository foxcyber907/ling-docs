---
outline:
  level: [2, 3]
---

# 📦 Windows 部署

::: info
本教程为快速开始，如需从源码部署请可以参考[Windows 开发环境搭建](/develop/windows_dev.md)。
:::

## 一、部署前的准备

- 在DeepSeek或者其他大模型网站中，申请自己的API密钥，并且保证有余额供使用
- [DeepSeek的官方API获取网站](https://platform.deepseek.com/)
- [硅基流动API获取网站](https://api.siliconflow.com/)

## 二、正式开始

### 下载软件

- 在[release](https://github.com/SlimeBoyOwO/LingChat/releases)中，找到最新的版本，下载如 `LingChat.x.x.x.7z` 的文件，下载完成后解压它。
- 点击根目录下的 `LingChat.exe` 启动程序

::: tip
解压完成后可能会发生 `LingChat.exe` 不见了的情况，这多半是由于 Windows Defender 或者某杀毒软件把它当病毒干掉了。需要手动打开**Windows安全中心**，选择**病毒和威胁防护**一栏，允许该威胁。 或者在杀毒软件中，将LingChat.exe添加白名单。
:::

## 三、首次启动配置

- 启动程序后，点开右上角的菜单，点击【文字】部分的【进入设置页面】按钮，输入自己选用的大模型类型和API，模型信息等（**这些是必填信息**）
- 设置完毕后，滑动到最下方，点击保存配置。关闭黑不溜秋的窗口和LingChat程序，重新点击 `LingChat.exe` 启动程序，就可以使用啦！

> [!IMPORTANT]
>
> 1. **有些用户的电脑启动`LingChat.exe`之后会无限卡在加载页，请在现代浏览器如谷歌中输入`localhost:8765`进入程序**
> 2. **当你关闭程序准备重启初始化时候，务必保证前端和后端都关闭（exe或者浏览器的网页，还有cmd窗口），否则可能出现进去人物消失的情况**
