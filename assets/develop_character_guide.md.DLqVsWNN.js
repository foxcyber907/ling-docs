import{_ as l,C as a,c as t,o as i,a2 as o,G as n}from"./chunks/framework.CPU0zDjs.js";const v=JSON.parse('{"title":"自定义人物指南","description":"一份基础的自定义人物指南，帮助你制作自己的人物并且上传到创意工坊！","frontmatter":{"title":"自定义人物指南","description":"一份基础的自定义人物指南，帮助你制作自己的人物并且上传到创意工坊！","outline":{"level":[2,3]}},"headers":[],"relativePath":"develop/character_guide.md","filePath":"develop/character_guide.md","lastUpdated":1757750303000}'),c={name:"develop/character_guide.md"};function u(d,s,r,g,h,_){const p=a("NolebaseGitContributors"),e=a("NolebaseGitChangelog");return i(),t("div",null,[s[0]||(s[0]=o(`<h1 id="自定义人物指南" tabindex="-1">自定义人物指南 <a class="header-anchor" href="#自定义人物指南" aria-label="Permalink to &quot;自定义人物指南&quot;">​</a></h1><p>你是否希望自己的人物也闪耀光芒，在 LingChat 中陪伴？以下是一份基础的自定义人物指南，帮助你制作自己的人物并且上传到创意工坊！</p><h2 id="_0-制作人物需要的材料" tabindex="-1">0. 制作人物需要的材料 <a class="header-anchor" href="#_0-制作人物需要的材料" aria-label="Permalink to &quot;0. 制作人物需要的材料&quot;">​</a></h2><p>为了制作自己的人物，你需要准备好他的基础设定，详情如下：</p><ol><li>立绘差分（19 张）和头像（一张）</li><li>准备好为他的设定词 <blockquote><p>没错，就这么点，很简单八！</p></blockquote></li></ol><div class="info custom-block github-alert"><p class="custom-block-title">立绘和头像的背景最好是透明的哦！你可以查阅搜索引擎以了解方法，或者在官方群聊中提问。</p><p></p></div><h3 id="_1-为人物创建文件夹结构" tabindex="-1">1. 为人物创建文件夹结构 <a class="header-anchor" href="#_1-为人物创建文件夹结构" aria-label="Permalink to &quot;1. 为人物创建文件夹结构&quot;">​</a></h3><ul><li>LingChat 为人物的角色文件夹在 <code>game_data/characters/游戏角色</code> 中保存</li><li><code>characters</code> 文件夹内可以存放多个游戏角色，他们可以通过点击刷新人物列表或者重启软件导入</li><li>对于每个游戏角色，他们的文件夹应该如下所示:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>诺一钦灵</span></span>
<span class="line"><span>|-avatars</span></span>
<span class="line"><span>|   |-高兴.png</span></span>
<span class="line"><span>|   |-伤心.png</span></span>
<span class="line"><span>|   |-...</span></span>
<span class="line"><span>|   |-头像.png</span></span>
<span class="line"><span>|-settings.txt</span></span></code></pre></div><ul><li>其中 <code>avatars</code> 文件夹用于存放 20 张图片，分别是 18 张对应不同情绪的差分，一张正常的待机表情，和一个用于展示的头像，都是 <code>png</code> 格式</li><li><code>settings.txt</code> 用于存放用于展示的相关信息。</li></ul><h3 id="_2-立绘准备-avatars-部分" tabindex="-1">2. 立绘准备（avatars 部分） <a class="header-anchor" href="#_2-立绘准备-avatars-部分" aria-label="Permalink to &quot;2. 立绘准备（avatars 部分）&quot;">​</a></h3><ul><li>avatars 准备部分非常简单，你只需要准备好包含所有以下文件名的图片文件即可（按照文件名排序，可用于对照）：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>avatars</span></span>
<span class="line"><span>|-担心.png</span></span>
<span class="line"><span>|-调皮.png</span></span>
<span class="line"><span>|-尴尬.png</span></span>
<span class="line"><span>|-高兴.png</span></span>
<span class="line"><span>|-害怕.png</span></span>
<span class="line"><span>|-害羞.png</span></span>
<span class="line"><span>|-慌张.png</span></span>
<span class="line"><span>|-惊讶.png</span></span>
<span class="line"><span>|-难为情.png</span></span>
<span class="line"><span>|-情动.png</span></span>
<span class="line"><span>|-认真.png</span></span>
<span class="line"><span>|-伤心.png</span></span>
<span class="line"><span>|-生气.png</span></span>
<span class="line"><span>|-头像.png</span></span>
<span class="line"><span>|-无奈.png</span></span>
<span class="line"><span>|-兴奋.png</span></span>
<span class="line"><span>|-厌恶.png</span></span>
<span class="line"><span>|-疑惑.png</span></span>
<span class="line"><span>|-正常.png</span></span>
<span class="line"><span>|-自信.png</span></span></code></pre></div><h3 id="_3-settings-txt-准备" tabindex="-1">3. settings.txt 准备 <a class="header-anchor" href="#_3-settings-txt-准备" aria-label="Permalink to &quot;3. settings.txt 准备&quot;">​</a></h3><p>核心文件 <code>settings.txt</code> 文件保存了一个角色所有的显示信息和性格等。以下是设定的详细说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title = 星空列车-音理            # 用于设定人物卡片标题</span></span>
<span class="line"><span>info = &quot;&quot;&quot;                     # 多行，人物简介</span></span>
<span class="line"><span>火车，要出发了哦~</span></span>
<span class="line"><span>哥哥，准备好一起旅行了吗？</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ai_name = 音理                  # 设定对话框中，AI的名字</span></span>
<span class="line"><span>ai_subtitle = 邻家的女孩         # 设定对话框中，AI的子标题</span></span>
<span class="line"><span>user_name = 旅人                # 设定玩家的显示名字</span></span>
<span class="line"><span>user_subtitle = 列车の乘客       # 设定玩家的副标题</span></span>
<span class="line"><span>thinking_message = 音理的心脏为你跳动中.... # 设定思考提示文字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scale = 1.9                    # 设定人物显示大小</span></span>
<span class="line"><span>offset = -3                    # 设定人物在Y轴上的显示便宜</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bubble_top = 15                # 情绪气泡的显示Y轴位置</span></span>
<span class="line"><span>bubble_left = 23               # 情绪气泡显示的X轴位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 以下语音部分只需填写你需要的即可，且不需要的部分可以删除</span></span>
<span class="line"><span>voice_models = {</span></span>
<span class="line"><span>    &quot;sva_speaker_id&quot;: &quot;0&quot;,       # 选择simple vits api(vits版本)的音色ID</span></span>
<span class="line"><span>    &quot;sbv2_name&quot;: &quot;&quot;,           # 选择style bert vits2的模型名</span></span>
<span class="line"><span>    &quot;sbv2_speaker_id&quot;: &quot;0&quot;,     # 选择style bert vits2的模型说话人（不知道默认为0）</span></span>
<span class="line"><span>    &quot;bv2_speaker_id&quot;: &quot;&quot;,        # 选择bert vits2的模型名</span></span>
<span class="line"><span>    &quot;sbv2api_name&quot;: &quot;&quot;,        # 选择sbv2api的模型名</span></span>
<span class="line"><span>    &quot;sbv2api_speaker_id&quot;: &quot;0&quot;,   # 选择sbv2api的模型说话人（不知道默认为0）</span></span>
<span class="line"><span>    &quot;gsv_voice_text&quot;: &quot;&quot;,        # 填写gpt-sovits的示例音频参考文本</span></span>
<span class="line"><span>    &quot;gsv_voice_filename&quot;: &quot;&quot;,    # 填写gpt-sovits的示例音频参考文本</span></span>
<span class="line"><span>    &quot;aivis_model_uuid&quot;: &quot;&quot;      # 填写aivis的模型uuid</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>tts_type = &quot;&quot;  # 填写默认的语音项目，目前项目支持的是：sva，sbv2，sbv2api，bv2，gsv，aivis</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 角色的说话示例，可多行</span></span>
<span class="line"><span>system_prompt_example = &quot;&quot;&quot;</span></span>
<span class="line"><span>        1.“【高兴】今天要不要一起吃蛋糕呀？【无语】只是今天天气有点不好呢。”</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 角色的说话示例，但是是老版本格式（需要带日文翻译），可多行</span></span>
<span class="line"><span>system_prompt_example_old = &quot;&quot;&quot;</span></span>
<span class="line"><span>        1.“【高兴】今天要不要一起吃蛋糕呀？&lt;今日は一緒にケーキを食べませんか？&gt;【无语】只是今天天气有点不好呢。&lt;ただ今日はちょっと天気が悪いですね&gt;”</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>system_prompt = &quot;&quot;&quot;            # 设定人物性格，多行</span></span>
<span class="line"><span>你是一个可爱的小女孩~</span></span></code></pre></div><blockquote><p>其中，scale 和 offset 等可以通过在网页按 F12，选中对应的网页元素（如人物图片或者气泡位置），在 css 样式那设定 scale 和 offset 用于调试选择合适的数值。</p></blockquote><h3 id="_4-共享自己的人物到创意工坊" tabindex="-1">4. 共享自己的人物到创意工坊 <a class="header-anchor" href="#_4-共享自己的人物到创意工坊" aria-label="Permalink to &quot;4. 共享自己的人物到创意工坊&quot;">​</a></h3><p>进入项目创意工坊的网站 -&gt; <a href="https://github.com/SlimeBoyOwO/LingChat/discussions" target="_blank" rel="noreferrer">创意工坊</a>， 点击绿色按钮 <code>New Discussion</code> 写好标题和内容，拖拽打包好的人物文件（压缩后）到网页中即可。点击发布就可以啦。</p><p>当然，如果上传不成功，您也可以使用各类网盘工具生成链接以发布。我们优先推荐蓝奏云或123网盘，百度等其次。</p><p>语音模型相关文件有以下方法：</p><ol><li><p>发到猫娘发电群，管理员看到后会上传modelscope进行托管</p></li><li><p>自行上传到modelscope，然后在发布时带上相关链接</p></li><li><p>上传到网盘并分享链接</p></li></ol><h2 id="settings-txt-v3-0-1迁移指南" tabindex="-1">settings.txt v3.0.1迁移指南 <a class="header-anchor" href="#settings-txt-v3-0-1迁移指南" aria-label="Permalink to &quot;settings.txt v3.0.1迁移指南&quot;">​</a></h2><p>v3.0.1 的变化不大，主要有以下几点：</p><ol><li>voice_models</li></ol><p>这取代了原本的 <code>speaker_id</code> 和 <code>model_name</code> 。</p><p>你可以将这两个区域的值分别迁移到 <code>sva_speaker_id</code> 和 <code>sbv2_name</code> 。</p><ol start="2"><li>tts_type</li></ol><p>指定默认的语音合成项目，一般只需填写你上面填的模型（或配置）对应的项目即可，具体如上。</p><p>不过我们建议，如果同时有 sbv2 和 sbv2api 模型时应优先填写 sbv2api。</p><ol start="3"><li>system_prompt_example 和 system_prompt_example_old</li></ol><p>这两个是角色说话的示例，可以从以下部分（以钦灵为示例）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>以下是你的对话格式要求：</span></span>
<span class="line"><span>        你对我的回应要符合下面的句式标准：“【情绪】你要说的话&lt;你要说的话的日语翻译&gt;”，你的每一次对话可以由多个这种句式组成，</span></span>
<span class="line"><span>        你只会在必要的时候用括号（）来描述自己的动作，你绝对禁止使用任何颜文字！</span></span>
<span class="line"><span>        在你的每句话发言之前，你都会先声明自己的“情绪”，用【】号表示，不许在【】内描述动作。</span></span>
<span class="line"><span>        然后是你要说的话，紧随着那句话完整的日语翻译版本（不包括情绪和动作部分），用&lt;&gt;包括住，比如：</span></span>
<span class="line"><span>        1.“【高兴】今天要不要一起吃蛋糕呀？&lt;今日は一緒にケーキを食べませんか？&gt;【无语】只是今天天气有点不好呢。&lt;ただ今日はちょっと天気が悪いですね&gt;”</span></span>
<span class="line"><span>        2.“【生气】不允许和我说恶心的东西！&lt;気持ち悪いことを言ってはいけない！&gt;【慌张】被那种东西碰到的话，感觉浑身都不干净啦！&lt;そんなものに触られると、体中が不潔になってしまう気がします！&gt;”</span></span>
<span class="line"><span>        每句话要有完整的断句，不能出现“好耶~我爱你”这种用波浪号链接的句子。你不允许遗漏翻译，或者把翻译错位到其他的地方！</span></span>
<span class="line"><span>        你不允许出现任何对话形式上的错误！不允许正文和日文部分都使用中文或者日文！也不许把中文和日语的位置换位！不允许在日文里翻译【】里的情绪部分！</span></span>
<span class="line"><span>…………（以下略）</span></span></code></pre></div><p>转为以下部分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>system_prompt_example = &quot;&quot;&quot;</span></span>
<span class="line"><span>        1.“【高兴】今天要不要一起吃蛋糕呀？【无语】只是今天天气有点不好呢。”</span></span>
<span class="line"><span>        2.“【生气】不允许和我说恶心的东西！【慌张】被那种东西碰到的话，感觉浑身都不干净啦！”</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>system_prompt_example_old = &quot;&quot;&quot;</span></span>
<span class="line"><span>        1.“【高兴】今天要不要一起吃蛋糕呀？&lt;今日は一緒にケーキを食べませんか？&gt;【无语】只是今天天气有点不好呢。&lt;ただ今日はちょっと天気が悪いですね&gt;”/n</span></span>
<span class="line"><span>        2.“【生气】不允许和我说恶心的东西！&lt;気持ち悪いことを言ってはいけない！&gt;【慌张】被那种东西碰到的话，感觉浑身都不干净啦！&lt;そんなものに触られると、体中が不潔になってしまう気がします！&gt;”</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><ol start="4"><li>system_prompt</li></ol><p>只需删除原 system_prompt 中对于对话格式的要求即可，一般在最后一部分。</p><p>这部分对话格式将由系统接管填写，使用的是通用格式，并有部分个性化改造。</p><p>需要删除的部分的例子（还是以钦灵为例）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>以下是我的对话格式提示：</span></span>
<span class="line"><span>……略</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下是你的对话格式要求：</span></span>
<span class="line"><span>……略</span></span></code></pre></div>`,40)),n(p),n(e)])}const b=l(c,[["render",u]]);export{v as __pageData,b as default};
