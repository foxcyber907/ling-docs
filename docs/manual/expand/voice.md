#  🎙️ 语音功能使用说明

## 基础语音功能 VITS 使用
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

## 扩展语音功能 Style-Bert-Vits2 使用
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
