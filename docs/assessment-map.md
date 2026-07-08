# 评分项映射表

| 考核项目 | 分值 | 本项目对应成果 | 验收命令或证据 |
| --- | ---: | --- | --- |
| 项目与代码库配置 | 10 | `practice-blog` 项目目录、Git 仓库、`.gitignore`、阶段提交 | `git status`、`git log --oneline`、远程仓库页面 |
| Web运行环境 | 10 | Node 本地预览服务、首页、文章页、图片资源 | `node server.js`、浏览器访问 `http://localhost:4000` |
| Linux环境配置 | 10 | Ubuntu 虚拟机网络、主机名、环境变量、常用配置文件 | `ip addr`、`hostnamectl`、`echo $PATH`、`.bashrc` 截图 |
| Linux账户配置 | 10 | `dev` 用户、sudo 权限、home 目录、文件权限演示 | `id dev`、`groups dev`、`chmod`、`chown` 截图 |
| 远程管理配置 | 10 | OpenSSH 服务、密钥登录、远程文件传输 | `systemctl status ssh`、`ssh dev@IP`、`rsync/scp` 截图 |
| Web站点部署 | 10 | Nginx 静态站点目录、站点配置、局域网访问结果 | `nginx -t`、`systemctl status nginx`、浏览器访问虚拟机 IP |

## 答辩展示顺序

1. 展示首页，说明项目目标和完整流程。
2. 展示 Git 提交历史，证明项目不是一次性拼出来的。
3. 展示本地运行效果，说明 Web 运行环境已经可用。
4. 展示 Linux 虚拟机配置截图，说明系统环境和账户权限。
5. 展示 SSH 登录和文件同步，说明远程管理能力。
6. 展示 Nginx 访问结果，完成最终部署闭环。

## 报告写作重点

- 不只贴命令，要说明每个工具在开发流程中的作用。
- 每个评分项至少放 1 张关键截图。
- 问题解决部分可以写端口占用、权限不足、SSH 登录失败、Nginx 配置错误等真实排错过程。
- 技术展望可以写从手动部署升级到 GitHub Actions 自动部署，或从手写静态页升级到 Hexo/VitePress。
