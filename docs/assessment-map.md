# 评分项映射表

| 考核项目 | 分值 | 考核内容 | 本项目对应成果 | 需要补充的证据 |
| --- | ---: | --- | --- | --- |
| 项目与代码库配置 | 10 | 项目配置、编辑器配置、Git配置等 | `practice-blog` 项目目录、Git 仓库、`.gitignore`、阶段提交 | VS Code 项目截图、`git status`、`git log --oneline`、远程仓库页面 |
| Web运行环境 | 10 | 语言包、包管理器、关键软件包及配置等 | Node 本地预览服务、`package.json`、首页、文章页、图片资源 | Node 版本、本地服务启动、浏览器访问 `http://localhost:4000` |
| Linux环境配置 | 10 | 系统 profile 配置、用户配置、环境变量等 | Ubuntu 虚拟机网络、主机名、环境变量、`.bashrc`、`/etc/profile` | `ip addr`、`hostnamectl`、`echo $PATH`、配置文件截图 |
| Linux账户配置 | 10 | 账户配置、Home配置、关键文件的权限配置等 | `dev` 用户、home 目录、sudo 权限、文件权限演示 | `id dev`、`groups dev`、`ls -la /home/dev`、`chmod/chown` 截图 |
| 远程管理配置 | 10 | SSH服务、端口配置、登录配置等 | OpenSSH 服务、端口 22、密钥登录、远程文件传输 | `systemctl status ssh`、`ss -tlnp`、`ssh dev@IP`、`scp/rsync` 截图 |
| Web站点部署 | 10 | 可运行的站点、基本功能、部署脚本 | 本地静态站点、Nginx 部署方案、部署说明、可访问页面 | Nginx 配置、部署脚本、浏览器访问虚拟机 IP 或 GitHub Pages |

## 当前完成情况

| 项目 | 状态 | 说明 |
| --- | --- | --- |
| 项目与代码库配置 | 已完成基础版 | 本地 Git 仓库和 GitHub 远程仓库已建立，已有阶段提交。 |
| Web运行环境 | 已完成基础版 | 本地页面可通过 `http://localhost:4000` 访问。 |
| Linux环境配置 | 待实操补证据 | 需要在 Ubuntu 虚拟机中真实配置并截图。 |
| Linux账户配置 | 待实操补证据 | 需要创建用户、配置 home 和权限并截图。 |
| 远程管理配置 | 待实操补证据 | 需要配置 SSH、登录和文件传输并截图。 |
| Web站点部署 | 待实操补证据 | 需要部署到 Nginx 或开启 GitHub Pages，并保留访问截图。 |

## 答辩展示顺序

1. 展示 GitHub 仓库和本地 Git 提交历史。
2. 展示本地网页运行效果和项目目录结构。
3. 展示 Node/包管理器/关键配置文件。
4. 展示 Linux 环境变量、profile 和用户配置。
5. 展示 SSH 服务、端口和远程登录。
6. 展示最终站点部署结果和部署脚本。

## 报告写作重点

- 每个评分项至少放 1 张关键截图。
- 不只贴命令，要说明该工具在开发流程中的作用。
- 问题解决部分可以写端口占用、权限不足、SSH 登录失败、Nginx 配置错误等真实排错过程。
- 技术展望可以写从手动部署升级到 GitHub Actions 自动部署，或从手写静态页升级到 Hexo/VitePress。
