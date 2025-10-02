---
title: Linux 部署教程
description: 学习如何在Linux系统上部署LingChat，包括环境配置、依赖安装和部署步骤指南。
outline:
  level: [2, 4]
---

# 🐧 Linux 部署

> [!IMPORTANT] 文档已经过久没有更新，请慎重跟随文档进行操作

- 以下内容假设你对Linux系统有一定的了解，如果觉得难以理解，请使用Windows系统部署[Windows部署指南](/manual/deployment/win_old)

::: info
本教程推荐使用 [uv](https://docs.astral.sh/uv/) 作为 Python 包管理器，它提供了更快的包安装速度和更好的依赖管理体验。当然，传统的 pip 和 conda 方式依然可用。
:::

::: info
我们建议使用 mamba 代替 conda ，它与 conda 使用方式几乎相同，并在处理依赖上优于 conda。
:::

## 一、克隆LingChat，获取必要的文件

通过 git clone 将 [LingChat repo](https://github.com/SlimeBoyOwO/LingChat/) clone 到本地，再进入文件夹。

```bash
git clone -b main https://github.com/SlimeBoyOwO/LingChat.git
```

::: tip
如果您想提前体验新功能，可拉取 `develop` 分支，更新更及时，但是可能会有未知的问题

```bash
git clone -b develop https://github.com/SlimeBoyOwO/LingChat.git
```

:::

## 二、Python环境配置

需确保Python版本为3.10及以上

```bash
python3 --version
```

如果版本低于3.10，请更新Python版本。

```bash
# 此处以 Python 3.12 为例
# Ubuntu/Debian
sudo apt update
sudo apt install python3.12 python3.12-venv
# 如执行了这一步，建议在执行时将python3指向python3.12
# 更新替代方案，设置 python3.12 为默认的 python3 版本:
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12
sudo update-alternatives --config python3
```

### 安装 uv (推荐)

安装 uv 包管理器：

```bash
# 使用 pip 安装 uv
pip3 install uv
```

或者使用官方安装脚本：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

::: WARNING
有[报告指出](https://github.com/foxcyber907/ling-docs/issues/12)使用 `Fedora 42 Workstation` 系统时，uv会无法使用。你可以尝试执行以下命令：
```
sudo dnf install gcc gobject-introspection-devel cairo-gobject-devel pkg-config python3-devel gtk4
```
:::

::: tip
使用 uv 时需要先运行 `uv venv` 创建虚拟环境，然后使用 `uv pip install` 安装依赖，或者直接使用 `uv run` 命令来自动管理虚拟环境。
:::

### 传统方式环境配置

#### 方法1：使用venv

```bash
python3 -m venv LingChat/venv      # 创建虚拟环境    
source LingChat/venv/bin/activate  # 激活环境
```

#### 方法2：使用conda/mamba

```bash
mamba create -f environment.yaml
mamba activate LingChat
```

这可以 **一步到位** 安装完环境，你可以跳转到[配置 env](#env_file)继续，或者自己创建环境安装依赖。

## 三、依赖安装

### 使用 uv 安装依赖 (推荐)

进入LingChat文件夹，创建虚拟环境并安装依赖

```bash
cd LingChat
uv venv
uv pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple --upgrade
```

::: tip
`uv pip install` 在该环境中安装依赖时貌似有个错误，但是我忘了是啥了，欢迎 [提issue](https://github.com/foxcyber907/ling-docs/issues)
:::

### 使用传统方式安装依赖

```bash
cd LingChat
pip install -i https://mirrors.aliyun.com/pypi/simple -r requirements.txt --upgrade
```

### 配置 `.env` 文件 {#env_file}

```bash
mv .env.example .env
nano .env
```

根据提示配置 `API密钥` 即可

配置完成后请按`Ctrl+O`保存，然后按`Ctrl+O`退出。

> [!NOTE] 默认未开启RAG功能，因为这必定会导致启动后第一次的白屏，需要等待加载完成刷新才行，有需要请自行在网页打开或修改.env文件。

## 四、模型下载

LingChat 需要下载一些模型才能正常使用。

### 18 情绪分类模型

运行以下命令：

```bash
cd backend/emotion_model_18emo
wget https://www.modelscope.cn/models/kxdw2580/LingChat-emotion-model-18emo/resolve/master/model.safetensors
```

### RAG 模型

先激活虚拟环境，然后运行以下命令：

```bash
python3 backend/core/memory_rag/downloading.py
```

## 启动程序

### 使用 uv 运行 (推荐)

#### 前台运行

```bash
uv run python3 backend/windows_main.py
```

#### 后台运行

如需在后台运行请使用screen

```bash
# 启动一个screen
screen -S lingchat
# 运行lingchat
uv run python3 backend/windows_main.py
```

> 按`Ctrl+a`, 再按`d`, 即可退出screen, 此时,程序仍在后台执行;  

### 传统方式运行

#### 前台运行

```bash
python backend/windows_main.py
```

#### 后台运行

如需在后台运行请使用screen

```bash
# 启动一个screen
screen -S lingchat
source ./venv/bin/activate  # 激活环境
# 运行lingchat
python backend/windows_main.py
```

> 按`Ctrl+a`, 再按`d`, 即可退出screen, 此时,程序仍在后台执行;  

## 四、访问 LingChat

放行端口 8765 端口，或者使用ssh端口转发。
在浏览器中访问 `http://<你的服务器IP地址>:8765` 即可访问LingChat。
::: tip
将LingChat部署在公网是非常危险的行为，可能导致您的api被盗刷，请务必在部署时进行安全配置。
:::

## 五、拉取最新的更新

当你想获取最新的代码时，请在项目根目录（`LingChat` 文件夹内）执行以下命令。

```bash
# 步骤一：放弃所有本地修改，避免冲突（注意：会丢失你的本地代码改动，请做好备份，游戏数据没有影响）
git reset --hard origin/main

# 步骤二：从 GitHub 拉取最新代码
git pull
```

::: tip
如果您想要获取最新的开发版本，请将 `main` 替换为 `develop`。
:::

## 命令速查表

### uv 相关命令 (推荐)

| 命令 | 用途           |
|------|--------------|
| `uv venv` | 创建Python虚拟环境 |
| `uv pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple --upgrade` | 安装依赖包        |
| `uv run python backend/windows_main.py` | 运行LingChat程序 |

### 传统方式命令

| 命令                           | 用途 |
|------------------------------|------|
| `source ./venv/bin/activate` | 激活Python虚拟环境（使用venv） |
| `conda activate LingChat` | 激活Python虚拟环境（使用conda） |
| `python backend/windows_main.py`             | 运行LingChat程序 |

### 后台运行相关

| 命令                   | 用途                              |
|----------------------|---------------------------------|
| `screen -S lingchat` | 创建一个名为lingchat的screen会话运行LingChat程序   |
| `Ctrl+a d`           | 退出当前screen会话(程序继续在后台运行)         |
| `screen -r lingchat` | 重新连接到mmc会话                      |
| `screen -ls`         | 查看所有screen会话列表                  |
