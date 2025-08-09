import{_ as l,C as a,c as t,o as i,a2 as c,G as n}from"./chunks/framework.CPU0zDjs.js";const m=JSON.parse('{"title":"自定义人物指南","description":"一份基础的自定义人物指南，帮助你制作自己的人物并且上传到创意工坊！","frontmatter":{"title":"自定义人物指南","description":"一份基础的自定义人物指南，帮助你制作自己的人物并且上传到创意工坊！","outline":{"level":[2,3]}},"headers":[],"relativePath":"develop/character_guide.md","filePath":"develop/character_guide.md","lastUpdated":1754758612000}'),o={name:"develop/character_guide.md"};function r(d,s,u,g,h,b){const p=a("NolebaseGitContributors"),e=a("NolebaseGitChangelog");return i(),t("div",null,[s[0]||(s[0]=c(`<h1 id="自定义人物指南" tabindex="-1">自定义人物指南 <a class="header-anchor" href="#自定义人物指南" aria-label="Permalink to &quot;自定义人物指南&quot;">​</a></h1><div class="info custom-block github-alert"><p class="custom-block-title">INFO</p><p>此指南中的setting格式在未来版本可能存在变动。如果需要，您可以在主项目devlop分支找到最新的setting格式。 如果不想了解，您也可以继续观看此教程，了解稳定版的制作方法</p></div><p>你是否希望自己的人物也闪耀光芒，在 LingChat 中陪伴？以下是一份基础的自定义人物指南，帮助你制作自己的人物并且上传到创意工坊！</p><h2 id="_0-制作人物需要的材料" tabindex="-1">0. 制作人物需要的材料 <a class="header-anchor" href="#_0-制作人物需要的材料" aria-label="Permalink to &quot;0. 制作人物需要的材料&quot;">​</a></h2><p>为了制作自己的人物，你需要准备好他的基础设定，详情如下：</p><ol><li>立绘差分（19 张）和头像（一张）</li><li>准备好为他的设定词 <blockquote><p>没错，就这么点，很简单八！</p></blockquote></li></ol><div class="info custom-block github-alert"><p class="custom-block-title">立绘的背景最好是透明的哦！你可以查阅搜索引擎以了解方法，或者在官方群聊中提问。</p><p></p></div><h3 id="_1-为人物创建文件夹结构" tabindex="-1">1. 为人物创建文件夹结构 <a class="header-anchor" href="#_1-为人物创建文件夹结构" aria-label="Permalink to &quot;1. 为人物创建文件夹结构&quot;">​</a></h3><ul><li>LingChat 为人物的角色文件夹在 <code>game_data/characters/游戏角色</code> 中保存</li><li><code>characters</code> 文件夹内可以存放多个游戏角色，他们可以通过点击刷新人物列表或者重启软件导入</li><li>对于每个游戏角色，他们的文件夹应该如下所示:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>诺一钦灵</span></span>
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
<span class="line"><span># 二选一部分，以下两行只要写一行进去，看你选择的vits引擎</span></span>
<span class="line"><span>speaker_id = 4                 # 选择simple vits api的音色ID（如果使用simple vits api就加上这个）</span></span>
<span class="line"><span>model_name = neri              # 选择style bert vits2的模型名</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>scale = 1.9                    # 设定人物显示大小</span></span>
<span class="line"><span>offset = -3                    # 设定人物在Y轴上的显示便宜</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bubble_top = 15                # 情绪气泡的显示Y轴位置</span></span>
<span class="line"><span>bubble_left = 23               # 情绪气泡显示的X轴位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>system_prompt = &quot;&quot;&quot;            # 设定人物性格，多行</span></span>
<span class="line"><span>你是一个可爱的小女孩~</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><blockquote><p>其中，scale 和 offset 等可以通过在网页按 F12，选中对应的网页元素（如人物图片或者气泡位置），在 css 样式那设定 scale 和 offset 用于调试选择合适的数值。</p></blockquote><h3 id="_4-共享自己的人物到创意工坊" tabindex="-1">4. 共享自己的人物到创意工坊 <a class="header-anchor" href="#_4-共享自己的人物到创意工坊" aria-label="Permalink to &quot;4. 共享自己的人物到创意工坊&quot;">​</a></h3><p>进入项目创意工坊的网站 -&gt; <a href="https://github.com/SlimeBoyOwO/LingChat/discussions" target="_blank" rel="noreferrer">创意工坊</a>， 点击绿色按钮 <code>New Discussion</code> 写好标题和内容，拖拽打包好的人物文件（压缩后）到网页中即可。点击发布就可以啦。</p><p>当然，如果上传不成功，您也可以使用各类网盘工具生成链接以发布。我们优先推荐蓝奏云或123网盘，百度等其次。</p>`,21)),n(p),n(e)])}const v=l(o,[["render",r]]);export{m as __pageData,v as default};
