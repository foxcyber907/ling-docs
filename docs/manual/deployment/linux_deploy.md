---
outline:
  level: [2, 4]
---

#  🐧  Linux 部署

- 以下内容假设你对Linux系统有一定的了解，如果觉得难以理解，请用使用Windows系统部署[Windows部署指南](/manual/deployment/win_deploy)

::: info
本教程推荐使用 [uv](https://docs.astral.sh/uv/) 作为 Python 包管理器，它提供了更快的包安装速度和更好的依赖管理体验。当然，传统的 pip 和 conda 方式依然可用。
:::


## 一、 克隆LingChat，获取必要的文件
通过 git clone 将 [LingChat repo](https://github.com/SlimeBoyOwO/LingChat/) clone 到本地

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

::: tip
使用 uv 时需要先运行 `uv venv` 创建虚拟环境，然后使用 `uv pip install` 安装依赖，或者直接使用 `uv run` 命令来自动管理虚拟环境。
:::

### 传统方式环境配置

#### 方法1：使用venv
```bash
python3 -m venv LingChat/venv      # 创建虚拟环境    
source LingChat/venv/bin/activate  # 激活环境
```

#### 方法2：使用conda（需先安装Miniconda或Anaconda）
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
conda create -n LingChatEnv python=3.12
conda activate LingChatEnv
```

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
pip install uv -i https://mirrors.aliyun.com/pypi/simple
uv pip install -i https://mirrors.aliyun.com/pypi/simple -r requirements.txt --upgrade
```

### 配置 `.env` 文件
```bash
mv .env.example .env
nano .env
```
根据提示配置 `API密钥` 即可

配置完成后请按`Ctrl+O`保存，然后按`Ctrl+O`退出。

::: details `.env`文件内容如下：
```ini
# 基础设置 BEGIN

## API 与 模型 设置 BEGIN # 配置与AI模型和API相关的密钥和地址
LLM_PROVIDER="webllm" # 在这里选择对话模型，只可以填写webllm, gemini, ollama, lmstudio三个选项，webllm代表通用需要联网的AI模型（如deepseek），ollama和lmstudio表示本地，gemini如名）
CHAT_API_KEY="" # DeepSeek 或其他聊天模型的 API Key
VD_API_KEY="" # 图像识别模型的 API Key
CHAT_BASE_URL="https://api.deepseek.com" # API的访问地址
MODEL_TYPE="deepseek-chat" # 使用的模型类型
VD_BASE_URL="https://api.siliconflow.cn/v1" # 视觉模型的API访问地址
VD_MODEL="Pro/Qwen/Qwen2.5-VL-7B-Instruct" # 视觉模型的模型类型

OLLAMA_BASE_URL="http://localhost:11434" # Ollama配置- 地址
OLLAMA_MODEL="llama3" # Ollama配置- 模型

LMSTUDIO_MODEL_TYPE="unknow" # LM STUDIO 配置- 模型
LMSTUDIO_BASE_URL="http://localhost:1234/v1" # LM STUDIO 配置- 地址
LMSTUDIO_API_KEY="lm-studio" # LM STUDIO 配置- APIKEY 似乎不需要

GEMINI_API_KEY="sk-114514"
GEMINI_MODEL_TYPE="gemini-pro"
## API 与 模型 设置 END

## 对话功能设定 BEGIN # 配置RAG（检索增强生成）系统，让AI能“记忆”历史对话
USE_RAG=false # 是否启用RAG系统 [type:bool]
USE_TIME_SENSE=true # 是否启用时间感知 [type:bool]
## 对话功能设定 END

## 人物设定（弃用） BEGIN # 个性化AI和用户的名称，本部分已经迁移至多人物，不过你可以在这里留个简单的备份
USER_NAME="Lovely You" # 您的称呼
USER_SCHOOL="BiliBili University" # 您的学校或组织
AI_NAME="风雪" # AI的称呼
AI_SCHOOL="艾草 Studio" # AI的出品方
SYSTEM_PROMPT="已省略角色设定....." 
# 设定人物角色 [type:textarea]
## 人物设定（弃用） END

# 基础设置 END


# 开发者设置 BEGIN

## RAG系统设定 BEGIN # 配置RAG（检索增强生成）系统，让AI能“记忆”历史对话
RAG_RETRIEVAL_COUNT=3 # 每次回答时检索的相关历史对话数量
RAG_WINDOW_COUNT=5 # 取当前的最新N条消息作为短期记忆，之后则是RAG消息，然后是过去的记忆。
RAG_HISTORY_PATH="data/rag_chat_history" # RAG历史记录存储路径
CHROMA_DB_PATH="data/chroma_db_store" # ChromaDB向量数据库的存储路径
RAG_PROMPT_PREFIX="--- 以下是根据你的历史记忆检索到的相关对话片段，请参考它们来回答当前问题。这些是历史信息，不是当前对话的一部分： ---" # RAG前缀提示，支持多行
RAG_PROMPT_SUFFIX="--- 以上是历史记忆检索到的内容。请注意，这些内容用于提供背景信息，你不需要直接回应它们，而是基于它们和下面的当前对话来生成回复。 ---" # RAG后缀提示，支持多行
## RAG系统设定 END

## 存储与日志 BEGIN # 配置日志和其他文件的存储位置
BACKEND_LOG_DIR="data/logs" # 后端服务日志目录
APP_LOG_DIR="data/log" # 应用行为日志目录
TEMP_VOICE_DIR="frontend/public/audio" # 临时生成的语音文件存放目录
ENABLE_FILE_LOGGING=true # 是否将日志记录到文件
LOG_FILE_DIRECTORY="data/run_logs" # 日志文件的存储目录
## 存储与日志 END

## Debug信息 BEGIN # 用于开发和调试的设置
LOG_LEVEL=INFO # 日志设置：默认为INFO，设置为DEBUG时启用开发者模式，输出更详尽的日志
PRINT_CONTEXT=true # 更改True/False，决定是否把本次发送给llm的全部上下文信息截取后打印到终端
ENABLE_FILE_LOGGING=false # 是否启用文件日志记录
## Debug信息 END

## 服务端口配置 BEGIN # 配置各个服务的网络监听地址和端口
BACKEND_BIND_ADDR="0.0.0.0" # 后端监听地址
BACKEND_PORT=8765 # 后端监听端口
FRONTEND_BIND_ADDR="0.0.0.0" # 前端监听地址
FRONTEND_PORT=3000 # 前端监听端口
EMOTION_BIND_ADDR="0.0.0.0" # 情感分析服务监听地址
EMOTION_PORT=8000 # 情感分析服务监听端口
## 服务端口配置 END

## VITS语音与模型 BEGIN # 配置语音合成及其他模型路径
SIMPLE_VITS_API_URL="http://localhost:23456/voice/vits" # SIMPLE_VITS_API的语音合成API地址
STYLE_VITS_API_URL="http://localhost:5000/voice" # Style-bert-vits2的语音合成API地址
EMOTION_MODEL_PATH="backend/emotion_model_18emo" # 情感分析模型路径
## VITS语音与模型 END

# 开发者设置 END
```
:::

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
python3 backend/windows_main.py
```

#### 后台运行
如需在后台运行请使用screen
```bash
# 启动一个screen
screen -S lingchat
source ./venv/bin/activate  # 激活环境
# 运行lingchat
python3 backend/windows_main.py
```

> 按`Ctrl+a`, 再按`d`, 即可退出screen, 此时,程序仍在后台执行;  

## 四、拉取最新的更新
当你想获取最新的代码时，请在项目根目录（`LingChat` 文件夹内）执行以下命令。

```bash
# 步骤一：放弃所有本地修改，避免冲突（注意：会丢失你的本地改动，请做好备份）
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
| `uv run python3 backend/windows_main.py` | 运行LingChat程序 |
### 传统方式命令
| 命令                           | 用途 |
|------------------------------|------|
| `source ./venv/bin/activate` | 激活Python虚拟环境（使用venv） |
| `conda activate LingChatEnv` | 激活Python虚拟环境（使用conda） |
| `python3 backend/windows_main.py`             | 运行LingChat程序 |

### 后台运行相关
| 命令                   | 用途                              |
|----------------------|---------------------------------|
| `screen -S lingchat` | 创建一个名为lingchat的screen会话运行运行LingChat程序   |
| `Ctrl+a d`           | 退出当前screen会话(程序继续在后台运行)         |
| `screen -r lingchat` | 重新连接到mmc会话                      |
| `screen -ls`         | 查看所有screen会话列表                  |