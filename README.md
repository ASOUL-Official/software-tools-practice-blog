# 软件开发工具实践项目

这是一个用于课程验收的静态技术博客项目，目标是串起完整实践链路：本地开发、Git 管理、Linux 环境、SSH 远程管理和 Web 站点部署。

## 项目内容

- `index.html`：可直接访问的站点首页
- `posts/`：实验过程文章
- `assets/`：样式、脚本和图片资源
- `docs/`：部署说明、实验报告素材、截图清单
- `server.js`：无需第三方依赖的本地预览服务

## 本地运行

```powershell
node server.js
```

打开浏览器访问：

```text
http://localhost:4000
```

## 建议 Git 提交流程

```powershell
git init
git add .
git commit -m "init practice blog"
```

后续每完成一个实验配置，单独提交一次，方便展示代码版本历史。
