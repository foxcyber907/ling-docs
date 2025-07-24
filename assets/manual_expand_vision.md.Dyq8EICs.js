import{_ as e,c as o,o as a,a3 as n}from"./chunks/framework.HwITzfHN.js";const m=JSON.parse('{"title":"🌈视觉感知功能使用说明","description":"","frontmatter":{},"headers":[],"relativePath":"manual/expand/vision.md","filePath":"manual/expand/vision.md","lastUpdated":1753352760000}'),c={name:"manual/expand/vision.md"};function l(i,t,s,d,u,p){return a(),o("div",null,t[0]||(t[0]=[n(`<h1 id="🌈视觉感知功能使用说明" tabindex="-1">🌈视觉感知功能使用说明 <a class="header-anchor" href="#🌈视觉感知功能使用说明" aria-label="Permalink to &quot;🌈视觉感知功能使用说明&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>设定完毕后，可以通过在与AI对话的对话中，包含 <code>“看桌面”</code> 或者 <code>“看看我的桌面”</code> 来触发视觉感知，允许AI观察你的屏幕并做出回应</p></div><p>首先，从通义千问或者其他拥有视觉感知的大模型网站中，获取API -&gt; <a href="https://bailian.console.aliyun.com/?tab=api#/api" target="_blank" rel="noreferrer">阿里云的相关视觉模型API获取网站</a></p><p>然后，在设置或者根目录的 <code>.env</code> 文件中修改以下参数：</p><ul><li><code>VD_API_KEY</code>（图像识别模型的 API Key）</li><li><code>VD_BASE_URL</code>（视觉模型的 API 访问地址）</li><li><code>VD_MODEL</code>（视觉模型的模型类型）</li></ul><p>例如下面的示例：</p><p>假设你要使用 <a href="https://bailian.console.aliyun.com/?tab=model&amp;accounttraceid=bef5c4d0bc384ad294f43f844ed11cd9thwc#/model-market/detail/qwen2.5-vl-7b-instruct" target="_blank" rel="noreferrer">qwen2.5-vl-7b-instruct</a> 模型：</p><pre><code>1. \`VD_API_KEY\` 参数填写你自己的阿里云 API Key

2. 查看 \`VD_BASE_URL\` 需要点击[页面](https://bailian.console.aliyun.com/?tab=model&amp;accounttraceid=bef5c4d0bc384ad294f43f844ed11cd9thwc#/model-market/detail/qwen2.5-vl-7b-instruct) 右上角的 \`查看API参考\`，之后你会在页面右侧看到以下代码，其中的 \`base_url\` 变量值就是 \`VD_BASE_URL\` 的值：
    \`\`\`python
    import os
    from openai import OpenAI

    client = OpenAI(
        # 若没有配置环境变量，请用百炼API Key将下行替换为：api_key=&quot;sk-xxx&quot;,
        api_key=os.getenv(&quot;DASHSCOPE_API_KEY&quot;),
        base_url=&quot;https://dashscope.aliyuncs.com/compatible-mode/v1&quot;, # VD_BASE_URL的值
    )
    completion = client.chat.completions.create(
        model=&quot;qwen-vl-plus&quot;,  # 此处以qwen-vl-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages=[{&quot;role&quot;: &quot;user&quot;,&quot;content&quot;: [
                {&quot;type&quot;: &quot;image_url&quot;,
                &quot;image_url&quot;: {&quot;url&quot;: &quot;https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg&quot;}},
                {&quot;type&quot;: &quot;text&quot;, &quot;text&quot;: &quot;这是什么&quot;},
                ]}]
        )
    print(completion.model_dump_json())
    \`\`\`

3. \`VD_MODEL\` 参数是模型的名称，点击[页面](https://bailian.console.aliyun.com/?tab=model&amp;accounttraceid=bef5c4d0bc384ad294f43f844ed11cd9thwc#/model-market/detail/qwen2.5-vl-7b-instruct)上方模型名称右侧的复制图标即可获取模型名称。
</code></pre><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>阿里云 API 默认赠送额度，不需要充值， <em>而且对于这个项目肯定够用一辈子了</em> 。</p></div>`,9)]))}const _=e(c,[["render",l]]);export{m as __pageData,_ as default};
