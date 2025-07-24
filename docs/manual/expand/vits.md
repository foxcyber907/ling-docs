#  🎙️ 拓展语音VITS使用

### 基础语音功能使用
- 若要使用 `Vits` 语音功能，请下载链接程序[simple-vits-api](https://github.com/Artrajz/vits-simple-api)。
- 该项目实现了基于 `Vits` 的简单语音合成 API。如果你是核显只能下载CPU版本。如果有独显建议下载 GPU 版本，速度快。
- 程序默认监听 23456 语音端口，程序默认导入的模型是 [ZcChat 地址](https://github.com/Zao-chen/ZcChat) -&gt; 讨论区 -&gt; 角色示范（丛雨）-&gt; [YuzuSoft_Vits.zip](https://github.com/Zao-chen/zao-chen.github.io/releases/download/%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD/YuzuSoft_Vits.zip)
- 模型下载好之后将压缩包 `YuzuSoft_Vits.zip` 解压到 simple-vits-api 的/data/models 目录下，再双击根目录下的 `start.bat` 启动就 ok 了
- 如果需要使用其他角色声线，请在 `game_data/characters/角色名/settings.txt` 中修改 `speaker_id` 这个属性（0~6可选）
> [!NOTE]
> 1. 视频演示中的灵灵，语音使用的是Style-Bert-Vits2，丛雨的vits模型还需要打磨暂未发布，可以先用Simple-Vits-API，效果差不多  
> 2. 视频中的音理，请在Discussions区下载人物包，语音请使用Style-Bert-Vits2
> 3. 建议先使用Simple-Vits-API玩玩，国人开发下载方便，需要扩展再用Style-Bert-Vits2
> 4. 经过反映，如果你的电脑是核显或者太久以前的电脑，单个语音可能要一分钟才能生成，而GPU可以1秒内生成，而且会有大量报错可能，核显用户大可能只能放弃语音功能了（哭哭）

### 视觉模型功能使用
- 从通义千问或者其他拥有视觉感知的大模型网站中，获取API -> [阿里云的相关视觉模型API获取网站](https://bailian.console.aliyun.com/?tab=api#/api)
- 在设置或者根目录的 `.env` 文件中修改 `VD_API_KEY`（图像识别模型的 API Key） 、`VD_BASE_URL`（视觉模型的 API 访问地址）和 `VD_MODEL`（视觉模型的模型类型）参数，例如：
**假设你要使用 [qwen2.5-vl-7b-instruct](https://bailian.console.aliyun.com/?tab=model&accounttraceid=bef5c4d0bc384ad294f43f844ed11cd9thwc#/model-market/detail/qwen2.5-vl-7b-instruct) 模型：**
    1. `VD_API_KEY` 参数填写你自己的阿里云 API Key
    2. 查看 `VD_BASE_URL` 需要点击[页面](https://bailian.console.aliyun.com/?tab=model&accounttraceid=bef5c4d0bc384ad294f43f844ed11cd9thwc#/model-market/detail/qwen2.5-vl-7b-instruct)右上角的 `查看API参考`，之后你会在页面右侧看到以下代码，其中的 `base_url` 变量值就是 `VD_BASE_URL` 的值：
        ```python
        import os
        from openai import OpenAI

        client = OpenAI(
            # 若没有配置环境变量，请用百炼API Key将下行替换为：api_key="sk-xxx",
            api_key=os.getenv("DASHSCOPE_API_KEY"),
            base_url="https://dashscope.aliyuncs.com/compatible-mode/v1", # VD_BASE_URL的值
        )
        completion = client.chat.completions.create(
            model="qwen-vl-plus",  # 此处以qwen-vl-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
            messages=[{"role": "user","content": [
                    {"type": "image_url",
                    "image_url": {"url": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"}},
                    {"type": "text", "text": "这是什么"},
                    ]}]
            )
        print(completion.model_dump_json())
        ```
    3. `VD_MODEL` 参数是模型的名称，点击[页面](https://bailian.console.aliyun.com/?tab=model&accounttraceid=bef5c4d0bc384ad294f43f844ed11cd9thwc#/model-market/detail/qwen2.5-vl-7b-instruct)上方模型名称右侧的复制图标即可获取模型名称
- 阿里云 API 默认赠送额度，不需要充值， *而且对于这个项目肯定够用一辈子了* 。
::: tip
设定完毕后，可以通过在与AI对话的对话中，包含 `“看桌面”` 或者 `“看看我的桌面”` 来触发视觉感知，允许AI观察你的屏幕并做出回应   
:::


### 扩展语音功能使用
> （Style-Bert-Vits2模型使用更好的音色，可自定义训练）
- 从下方相关链接中，下载Style-Bert-Vits2的 [Release](https://github.com/litagin02/Style-Bert-VITS2/releases) 的 **最新版本** ，解压
- 先决定这个软件（安装后12GB）的安装位置，然后启动里面的`Install-Style-Bert-VITS2.bat`文件（如果之后更改这个软件的位置会有Bug）
- 耐心等待很长时间后，这个软件会安装好。由于这个项目庞大，所以等待时间非常长
- 下载完毕后，在 `model_assests` 目录中，把下载好的Bert-Vits模型解压进去
- 打开程序的目录，里面有个 `server.bat` ，启动它即可使用
::: tip
要是想使用这个功能，需要在 `game_data/characters/<角色名>/settings.txt` 中设定 `model_name` 的参数为导入的模型的名字   
模型的名字可以通过启动`app.bat`中的人物列表中查看  
:::
