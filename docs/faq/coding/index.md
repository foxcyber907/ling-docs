# 本文档旨在解决安装的所有问题

## 1. 软件基础问题

> 这部分解答所有启动 Lingchat，对话和语音问题的疑问

### 启动问题

#### Lingchat 启动半天都在转圈圈
![3c06ff9da6aa261ba2855d0c512f656e](https://github.com/user-attachments/assets/ca13a991-4e8a-4c0d-b98e-67be36845a79)

- 多等一会，初始化时间比较长，在此期间不要关闭，如果最后还是无法启动，那没救了（，你的电脑可能是 20 多年前的老古董

#### 通常每个套接字地址(地址/网络地址/端口)只允许使用一次
![image](https://github.com/user-attachments/assets/ea51c143-12da-4c7a-9c5e-8f18bc54b673)

- 可能你的上一个 Lingchat 没有关闭，或者有其他从程序占用了 8765 这个端口，你可以检查是哪个程序占用的，把它那个程序给关了

#### 极少数出现：哪个浏览器都卡死在加载页面
- 用记事本打开backend\api\frontend_router.py，把文件内容更换为以下内容，重启程序即可修复：
```python
from fastapi import APIRouter, Request, Response  # 新增 Response
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os
from pathlib import Path  # 新增 Path 用于更安全的路径操作

router = APIRouter()

root_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
frontend_dir = os.path.join(root_dir, 'frontend', 'public')

# ✅ 自定义 StaticFiles（禁用缓存）
class NoCacheStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
        
        # ✅ 新增：强制修正 JS 文件的 Content-Type
        if path.endswith('.js'):
            response.headers["Content-Type"] = "application/javascript"
            
        return response

# ✅ 托管所有静态资源（保持原有路径结构）
def get_static_files():
    return NoCacheStaticFiles(directory=frontend_dir)

# ✅ 保持原有HTML路由
def get_file_response(file_path: str) -> FileResponse:
    response = FileResponse(file_path)
    response.headers.update({
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
    })
    return response

# ✅ 新增：方案二修复方法 - 手动处理关键JS文件
@router.get("/app.js")  # 假设这是你的主JS文件
async def serve_app_js():
    js_path = Path(frontend_dir) / "app.js"  # 根据实际路径调整
    if not js_path.exists():
        raise HTTPException(status_code=404)
    
    # ✅ 强制返回正确的 Content-Type
    return Response(
        content=js_path.read_bytes(),
        media_type="application/javascript",
        headers={
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache"
        }
    )

@router.get("/")
async def index():
    return get_file_response(os.path.join(frontend_dir, "pages", "index.html"))

@router.get("/about")
async def about():
    return get_file_response(os.path.join(frontend_dir, "pages", "about.html"))

@router.get("/settings")
async def settings():
    return get_file_response(os.path.join(frontend_dir, "pages", "settings.html"))
```

### 新虚拟环境激活失败
**问题**: 无法激活新的虚拟环境

**解决方案**:
1. 确保虚拟环境已正确创建，文件地址在"./venv"
2. 检查虚拟环境目录是否存在
3. 尝试手动激活虚拟环境
```bash
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate  # Windows
```

---

## 支持与联系
### 联系支持
如问题仍未解决，请加入联系开发团队并提供以下信息：
- 错误日志截图
- 问题发生时的操作步骤
- 系统环境信息

### 联系方式
- Telegram Group : [aigalgame](https://t.me/aigalgame)
- QQ Group: [1055935861](https://qm.qq.com/q/GTaZGFXqIQ)
