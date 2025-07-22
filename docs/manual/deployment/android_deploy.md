---
outline:
  level: [2, 5]   # 仅该文件显示 H2、H3
---

# 📱 Android 部署指南

::: info
本教程提供两种部署方式，请按需使用哦=w=
1. [手机+电脑的配合使用](/manual/deployment/android_deploy#phone_win_deploy)
   - 适合大多数用户，使用手机和电脑配合部署。
   - 使用手机浏览器访问电脑上的 LingChat，并在电脑上运行后端服务。
2. [纯手机使用](/manual/deployment/android_deploy#pure_phone_deploy)
   - 适合没有电脑的用户。
:::

:::  warning
手机版由于界面暂未适配，可能界面有点奇怪，最好用平板。
:::

## 一、 手机+电脑的配合使用 {#phone_win_deploy}


### 具体操作
> 请确保电脑和手机在 **同一网络** 下，否则无法使用。

> 如有需要可参考 [Windows 部署](/manual/deployment/win_deploy) 教程。

首先，查看电脑 ip 地址，如果你的电脑是 Windows 系统，先在键盘上同时按下 **Windows徽标键+字母R键** 输入 **cmd** 打开命令提示符，再在黑窗口中输入 **ipconfig** ，回车，窗口中可能出现以下内容：

![cmd-ipconfig](/assets/depoly_android/cmd-ipconfig.jpg)
记下其中的 **IPv4 地址** 后的 **ip地址**。

然后在电脑上打开  LingChat，观察命令提示符（黑窗口）中是否有这一行字：

```
INFO:     Uvicorn running on http://0.0.0.0:3000 (Press CTRL+C to quit)
```

记下 `0.0.0.0:` 之后的数字，这是 **端口号** 。（可能与示例不同，请以实际为准）

打开你的手机浏览器，手机调为横屏，在地址栏输入 **ip地址 + 一个英文的分号（: \) + 端口号** 即可使用。正常情况下如下图：

![手机前端演示](/assets/depoly_android/手机前端演示.jpg)

## 二、纯手机的使用 {#pure_phone_deploy}

### 一、安装 ZeroTermux 环境
前往 [ZeroTermux-Github](https://github.com/hanxinhao000/ZeroTermux/releases/tag/release) 下载ZeroTermux安装包并安装。

如果下载太慢或无法下载，可尝试使用 [Github镜像源](https://ghfast.top/github.com/hanxinhao000/ZeroTermux/releases/download/release/ZeroTermux-0.118.1.43.apk) 下载并安装。

**注意：安装其他版本或者选择Termux会导致以下教程出现部分的不适用，不建议这样做**

进入ZeroTermux软件界面，提示完整阅读协议时记得要把文字内容拉到最底下。

双击屏幕左侧边缘（部分ZT版本是按音量上/下键），下滑并点击"切换源"，推荐选择`清华源`，等待脚本运行完成。

> [!NOTE] 如无特殊说明，当出现 `(Y/I/N/O/D/Z)[default=?]` 或 `[Y/N]` 时，直接点击回车，选择默认选项即可。

### 解除进程限制（安卓 12 以上）

> 这一步只需安卓 12 以上版本的手机操作，如果你不清楚你的手机版本，推荐操作一下。
>
> 另外你需要打开手机开发者选项，详情搜索百度。
>
> 华为或荣耀设备请跳过此步，因为暂时用不了。

上下滑动屏幕选择 **修复 android 12** ，回车，看提示选择（一般全回车默认），直到下图：

![](/assets/depoly_android/adb地址-1.jpg)

现在你需要分屏操作，分屏后点击 设置 的 **开发者选项-无线调试** 右边的滑块， 再点击左边 **无线调试** 四个大字（对没错，左边是可以点的），位置如下图：

![](/assets/depoly_android/adb-2.jpg)

打开新界面后，点击 **使用配对码配对设备** ，弹出以下窗口，此时回到 ZeroTermux，输入 **IP 地址与端口** 中的内容，回车，再输入配对码，弹出下图：

![](/assets/depoly_android/adb-3.jpg)

在下面的窗口点 **取消** ，上面窗口选择 **不是** 回车，然后按照下面界面另一个 **IP 地址与端口** 填上面窗口的内容，如下图：

![](/assets/depoly_android/adb-4.jpg)

之后出现下图，配置完毕，关掉下面的设置后，在 **ZeroTermux** 回车回到主界面。

![](/assets/depoly_android/adb-ok.jpg)

### 部署  LingChat

我们提供多种方式部署 LingChat，您可以选择最合适的进行操作。当一种方式不行时，可以更换另一种方式。

（实际上现在只有一种......以后更新）

#### 使用预先打包好的容器

> 内置的 LingChat来自[我的分支](https://github.com/shadow01a/LingChat/tree/develop-termux)，因为develop分支更新比较频繁，避免更新出什么奇怪的问题......
##### 安装容器

>如果还在tmoe界面，请先退出。

在 **ZeroTermux 的终端** 复制执行以下命令，这将下载本人打包好的容器：
```
mkdir ./storage/downloads/backup
mkdir ./storage/downloads/backup/containers
mkdir ./storage/downloads/backup/containers/proot
cd ./storage/downloads/backup/containers/proot

pkg install wget

wget https://www.modelscope.cn/models/kxdw2580/LingChat-phone-file/resolve/master/debian-bookworm_arm64-LingChat-dev_2025-07-10_21-38-rootfs_bak.tar.xz

```

下载完毕后，直接在终端输入 `tmoe` 打开 tmoe，之后请回到 proot 界面，滑动屏幕选择 **恢复/还原proot容器** 回车，出现下图：

![](/assets/depoly_android/restore-1.jpg)

选择常规模式，回车，出现以下界面：

![](/assets/depoly_android/restone-2.jpg)

选右边那个，回车，出现以下界面：

![](/assets/depoly_android/restone-3.jpg)

输入一个 0 ，回车，等解压完成回车回到主界面。此时再进入 proot 界面，选择当前已安装容器列表，无脑回车即可打开容器。（此时需要等待容器加载完成）

> 如果出现以下界面，直接确定。
> ![](/assets/depoly_android/batterychoose.jpg)

##### 启动 LingChat

打开容器后，输入 `bash lingchat.sh`，即可打开 LingChat服务端，之后打开你的手机浏览器，手机调为横屏，在地址栏输入 `127.0.0.1:12746` 即可使用。如下图：

![](/assets/depoly_android/手机前端演示.jpg)

##### 配置 LingChat

这样部署的 LingChat 不能直接使用，请自行配置 api_key 等内容，可在 [DeepSeek的官方API获取网站](https://platform.deepseek.com/) ， [硅基流动API获取网站](https://api.siliconflow.com/) 获取

另外默认未开启RAG功能，因为这必定会导致启动后第一次的白屏，需要等待加载完成刷新才行，有需要请自行打开。

##### 更新 LingChat

输入 `bash update.sh` 即可自动更新

#### 其他方法
> 待更新，咕咕咕......

## 常见问题

### 输入地址无响应？

将 ZeroTermux 分屏或小窗使用。
### 输入地址后只有白屏？

看看 ZeroTermux 终端是否还在加载，加载完毕后刷新浏览器。
### 浏览器排版不对？

界面还没有适配，等更新吧......