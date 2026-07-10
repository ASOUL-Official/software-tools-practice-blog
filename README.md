# 软件开发工具实践验收看板

这是一个用于课程验收的静态 Web 项目，目标是把本地开发、Git 管理、Linux 环境配置、SSH 远程管理和 Web 站点部署串成一条完整实践链路。

## 当前成果

- 已完成可运行的静态验收看板：`index.html`
- 已完成 3 篇实验记录页：`posts/`
- 已整理评分映射、验收清单、截图清单和报告提纲：`docs/`
- 已提供 Linux + Nginx 部署脚本：`scripts/deploy-nginx.sh`
- 已完成 Ubuntu 22.04 WSL2、SSH `2222`、Nginx `8080` 部署验证
- 已补齐 9 张真实证据截图：`assets/screenshots/`
- 已推送到 GitHub 仓库，便于展示版本历史

## 本地运行

```powershell
node server.js
```

打开浏览器访问：

```text
http://localhost:4000
```

## 项目结构

```text
practice-blog/
├── index.html                  # 验收看板首页
├── assets/                     # 样式、脚本和评分图片
├── posts/                      # 实验记录文章
├── docs/                       # 验收材料和报告素材
├── scripts/deploy-nginx.sh     # Linux + Nginx 部署脚本
├── server.js                   # 本地预览服务
└── package.json                # 项目脚本配置
```

## 验收材料

- [评分项映射表](docs/assessment-map.md)
- [验收任务清单](docs/acceptance-checklist.md)
- [截图清单](docs/screenshot-checklist.md)
- [实验报告提纲](docs/report-outline.md)
- [部署说明](docs/deployment-guide.md)

## 建议展示顺序

1. 打开首页，展示 6 个评分项覆盖情况。
2. 打开 GitHub 仓库，展示项目结构和提交历史。
3. 打开实验记录页，说明关键配置过程。
4. 展示 Linux、SSH、Nginx 的真实截图。
5. 展示部署脚本和 `http://<Ubuntu-IP>:8080` 最终访问结果。
