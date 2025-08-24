---
title: 开发版 Windows 环境配置与使用指南
description: 详细指导如何在Windows环境下配置LingChat开发环境，包括Git、Python安装和源代码获取步骤。
outline:
  level: [2, 3]
---
# LingChat 开发版 Windows 环境配置与使用指南

LingChat 几乎每天都在更新，但是很长时间才会发布一个 release 版本。如果你想抢先使用新功能，或者想为 LingChat 项目做贡献，但是自己不会写代码，我们也欢迎你体验最新的开发版并及时向我们汇报 Bug。

本篇文档将手把手教你如何在 Windows 电脑上，从零开始配置环境，运行 LingChat 最新的开发版代码。即使你完全不懂编程。

欢迎你，勇于探索的测试者！

## 准备工作：安装必备工具

在开始之前，我们需要在你的电脑上安装五个免费的代码开发工具。

### 1. 安装 Git

Git 是一个代码版本管理工具，我们可以用它轻松地从 GitHub 上下载和更新 LingChat 的源代码。

- **下载地址**：[https://git-scm.com/download/win](https://git-scm.com/download/win)
- **安装方法**：下载后，双击打开安装包。你不需要理解每个选项的含义，**一路点击 "Next"** 使用默认设置完成安装即可。

### 2. 安装 Git lfs

Git LFS 是 Git 的一个扩展，用于管理大型文件，比如图片、视频、音频、源代码等等。

- **下载地址**：[https://git-lfs.com/](https://git-lfs.com/)
- **安装方法**：下载后，双击打开安装包，一直下一步直到安装结束。然后打开一个命令行，输入 `git lfs install` 。

### 3. 安装 Python

Python 是 LingChat 使用的编程语言。

- **下载地址**：[https://www.python.org/downloads/](https://www.python.org/downloads/)
- **推荐版本**：建议下载 3.12.10 版本，LingChat是基于python 3.12.10 开发的
- **安装方法**：
    1. 下载后，双击打开安装包。
    2. **【非常重要！】** 在安装界面的最下方，**务必勾选 "Add Python to PATH"** 选项，然后再点击 "Install Now"。
    3. 等待安装完成即可。

### 4x0. 安装 Conda（用于环境管理）

如果你习惯使用 Conda（Anaconda 或 Miniconda）来管理虚拟环境和依赖 
- **安装方法**：
     1. 下载 Windows 安装程序（推荐 64-bit）。
     2. 双击运行安装程序，接受默认选项即可。安装时可选择将 Conda 添加到 PATH（可选，但推荐使用 Anaconda Prompt 或在 VS Code 中选择解释器）。
     3. 安装完成后，打开 "Anaconda Prompt" 或 PowerShell（已配置 Conda）进行后续操作。

### 4x1. 或者安装 uv（用于环境管理）

uv 是一个由 Ruff 团队开发的、非常快的 Python 包管理器，我们将用它来安装 LingChat 的运行依赖。

- **安装方法**：
    1. 在 Windows 的开始菜单中，找到并打开 "PowerShell"（一个蓝色背景的窗口）。
    2. 在 PowerShell 窗口中，复制并粘贴以下命令，然后按回车键执行。

        ```powershell
        powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
        ```

    3. 安装完成后，关闭 PowerShell 窗口即可。

### 5. 安装 VS Code（可选）

> [!NOTE]
> 如果只是单纯使用，你可以不安装它，并跳过所有相关步骤。

VS Code (Visual Studio Code) 是最主流的代码编辑器，界面现代，运行速度快，我们将用它来管理和运行 LingChat。

- **下载地址**：[https://code.visualstudio.com/](https://code.visualstudio.com/)
- **安装方法**：下载后，双击打开安装包。同样，使用默认设置，一路点击 "Next" 完成安装。

## 一：获取最新的源代码

准备工作完成后，我们开始获取 LingChat 的源代码。

1. **创建项目文件夹**：在你的电脑上找一个合适的位置（比如 D 盘），创建一个新文件夹，专门用来存放 LingChat 的项目。例如，可以命名为 `MyProjects`。

2. **打开命令行工具**：
    - 进入你刚刚创建的 `MyProjects` 文件夹。
    - 在文件夹窗口的地址栏里，输入 `cmd` 然后按回车键。这会弹出一个黑色的命令行窗口。
3. **Fork lingchat仓库至您的账户**

3. **下载代码**：在弹出的黑色窗口中，复制并粘贴以下命令，然后按回车键。

```bash
git clone -b develop https://github.com/your_name/LingChat.git
```

- `git clone` 是下载命令。
- `-b develop` 表示我们要下载 `develop` 分支（也就是最新的开发版）。
- `your_name` 表示您的github账户名


当你看到命令行提示完成，并且 `MyProjects` 文件夹下出现了一个名为 `LingChat` 的新文件夹时，就说明代码已经成功下载到你的电脑里了！

## 二、使用 VS Code 配置和运行项目

### 2.1 初始化VSCode设置

现在，我们将使用 VS Code 来完成最后的配置和运行。

打开你安装好的vs code，如果不习惯英文界面，可以百度：“vscode如何设置中文”，将界面设置为中文。下面我们基于中文界面讲解。

LingChat是一个python项目，所以我们要给VS code安装Python插件。在左侧打开插件栏并搜索python，安装Python和Pylance，然后把软件重启即可。

### 2.2 使用VS Code 打开LingChat

在VS Code的左上角，找到"文件"选项，然后点击"打开文件夹..."(如果你使用的是英文界面，则是点击"File" -> "Open Folder...")，导航到刚刚下载的 `LingChat` 文件夹，然后点击 "选择文件夹"。现在你就成功的用VS Code打开了LingChat，在这之后，你可以在"文件"选项的“打开最近的文件”来快速找到LingChat。

### 2.3 创建并配置Python运行环境

现在，我们需要为 LingChat 创建一个隔离的、独立的 Python 运行环境并安装其所需的各种库。

下面给出三种常见方式（任选其一）来创建和激活虚拟环境：使用 uv、使用 Python 自带的 venv、使用 Conda。

#### 2.3.1创建虚拟环境
A) 使用 uv：
1. **打开终端**: 在 VS Code 的顶部菜单栏中，选择 "终端" -> "新建终端"。
2. **创建虚拟环境**:
    ```powershell
    uv venv venv
    ```
3. **激活虚拟环境**:
    ```powershell
    .\venv\Scripts\activate
    ```

B) 使用 Python 自带 venv：
1. 在终端执行：
    ```powershell
    python -m venv venv
    ```
2. 激活：
    ```powershell
    .\venv\Scripts\activate
    ```

C) 使用 Conda（如果已安装 Miniconda/Anaconda）：
1. 在 Anaconda Prompt 或 PowerShell（已配置 Conda）中执行：
    ```powershell
    conda env create -f environment.yaml
    conda activate lingchat
    ```
2. 如果需要把 conda 环境与 VS Code 关联，按 Ctrl+Shift+P -> Python: Select Interpreter，然后选择带有 (conda) 的解释器。

#### 2.3.2安装项目依赖
4. 环境激活后，如果您使用 uv 或 pip 要手动安装项目依赖。在激活的环境中运行：
    ```powershell
    uv pip install -r pyproject.toml
    ```
    如果没有安装 uv，也可以使用 pip（部分项目依赖可能需要 uv 特性）：
    ```powershell
    python -m pip install -r pyproject.toml
    ```

5. **选择解释器**: 按下 `Ctrl+Shift+P` 打开命令面板，输入 `Python: Select Interpreter`，然后选择对应虚拟环境的解释器（'.\venv' 或 conda 环境）。

6. **运行 LingChat**：在根目录新建 `.env`，将 `.env.example` 的内容复制到 `.env`，然后通过 VS Code 运行或使用命令：
    ```powershell
    python main.py
    ```

## 四、获取最新的更新

LingChat 几乎每天都在更新，你可以随时查看并使用最新的更新。

点击左侧的源代码管理按钮进入查看更新界面。点击虚线箭头（同步更改）刷新并拉取近期的更新。

> [!IMPORTANT]
> **重要提示**：作为测试者，我们一般不修改本地代码。如果拉取更新时提示“冲突 (Conflict)”，最简单的解决方法是放弃所有本地修改。可以点击上图中的撤销箭头（放弃所有更改），将所有文件恢复到更新前的状态，然后再点击同步更改按钮拉取最新代码。如果你对某些文件（如人物设定）有自己的修改，这大概率不要紧，不过还是建议备份。

## 五、纯命令行方式配置与使用 (Windows / Linux)

如果你习惯使用命令行，本章节将指导你如何完全通过命令行来完成所有配置和更新操作。

### 1. 安装核心工具

请确保你已根据【准备工作】章节安装了 `Git`, `Python` 和 `uv`。

### 2. 克隆与进入项目

首先，打开你的命令行终端（Windows上是`CMD`或`PowerShell`，Linux上是`Terminal`），然后执行以下命令。

```bash
# 克隆 develop 分支的源代码
git clone -b develop https://github.com/SlimeBoyOwO/LingChat.git

# 进入项目目录
cd LingChat
```

> [!NOTE]
>
> 如果下载太慢，使用下面的命令：
>
> ```bash
> git clone -b develop https://ghfast.top/github.com/SlimeBoyOwO/LingChat.git
> ```

### 3. 创建与激活虚拟环境

为了不污染你系统的全局 Python 环境，我们强烈建议为 LingChat 创建一个独立的虚拟环境。

下面给出命令行方式的三种可选方案（任选其一）：

- 使用 uv：（与上文一致）
    ```bash
    uv venv venv
    .\venv\Scripts\activate
    ```

- 使用 python -m venv：
    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```

- 使用 Conda：
    ```bash
    conda env create -f environment.yaml
    conda activate lingchat
    ```

激活成功后，你的命令行提示符前面会出现 `(venv)` 或 `(lingchat)` 字样。


### 4. 运行 LingChat

所有依赖安装完成后，请在根目录新建一个文件，把他命名为.env，把.env.example，复制到.env中并保存。然后执行以下命令即可启动 LingChat：

```bash
python main.py
```

### 6. 拉取最新的更新

当你想获取最新的开发版代码时，请在项目根目录（`LingChat` 文件夹内）执行以下命令。

```bash
# 步骤一：放弃所有本地修改，避免冲突（注意：会丢失你的本地改动，请做好备份）
git reset --hard origin/develop

# 步骤二：从 GitHub 拉取最新代码
git pull
```

**提示**：如果更新后 `pyproject.toml` 文件发生了变化，你需要再次运行 `uv pip install -r pyproject.toml` 来同步最新的依赖。

## 五、常见问题 (FAQ)

- **Q: 输入 `git` 或 `python` 或 `uv` 命令时，提示“不是内部或外部命令...”？**

   A: 这说明工具没有被正确安装，或者安装时忘记勾选 "Add to PATH"。请回到【准备工作】章节，卸载后重新安装，**务必记得勾选 "Add to PATH" 选项**。

- **Q: 运行 `python main.py` 时报错 `ModuleNotFoundError: No module named 'xxxx'`？**

   A: 这个错误说明缺少某个库。通常有两个原因：

    1. 你忘记激活虚拟环境了。请检查终端提示符前面是否有 `(venv)` 字样，如果没有，请执行 `.\venv\Scripts\activate`。

    2. 你忘记安装依赖了，或者更新代码后没有同步更新依赖。请在激活虚拟环境后，执行 `uv pip install -r pyproject.toml`。

- **Q: `git pull` 更新代码时提示错误或冲突 (conflict) 怎么办？**

  A: 作为测试者，你本地的代码一般不需要修改。如果遇到冲突，最简单的办法是放弃本地的所有改动，强制和服务器保持一致。在终端执行以下命令：

    ```powershell
    git reset --hard origin/develop
    git pull
    ```

    **注意：这个命令会丢弃你可能在本地做的任何修改。** 对于只想体验最新版的用户来说，这是最直接有效的方法。

> [!TIP] 你的聊天记录，设置等应该不会丢失，不过推荐备份。

---

感谢你为 LingChat 社区做出的贡献！如果你在使用过程中发现了任何 Bug 或者有好的建议，欢迎随时向我们提 [Issue](https://github.com/SlimeBoyOwO/LingChat/issues)！
