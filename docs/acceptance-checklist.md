# 验收任务清单

说明：本项目的 Linux 实验环境采用 Ubuntu 22.04 WSL2。它可以真实完成 Linux 环境、账户、SSH、Nginx 和 Web 部署配置；如课程必须要求 VirtualBox，可在报告中说明本次使用 WSL2 作为 Linux 虚拟化环境。

## 1. 项目与代码库配置

- [x] 创建 `practice-blog` 项目目录
- [x] 建立 Git 仓库
- [x] 绑定 GitHub 远程仓库
- [x] 推送到 `main` 分支
- [x] 截图：GitHub 仓库页面
- [x] 截图：`git log --oneline`

## 2. Web运行环境

- [x] 创建可运行静态站点
- [x] 编写 `server.js` 本地预览服务
- [x] 编写 `package.json`
- [x] 截图：Node 版本
- [x] 截图：项目自检通过
- [x] 截图：浏览器访问首页

## 3. Linux环境配置

- [x] 安装 Ubuntu 22.04 WSL2
- [x] 配置 Linux 网络环境
- [x] 查看主机名和系统信息
- [x] 配置环境变量
- [x] 配置 `.bashrc`、`.profile` 和 `/etc/profile.d/practice-tools.sh`
- [x] 截图：`ip addr`
- [x] 截图：`hostnamectl`
- [x] 截图：环境变量和 profile 配置

## 4. Linux账户配置

- [x] 创建 `dev` 用户
- [x] 配置 home 目录
- [x] 添加 sudo 权限
- [x] 演示关键文件权限
- [x] 截图：`id dev`
- [x] 截图：`groups dev`
- [x] 截图：`ls -ld /home/dev`
- [x] 截图：关键文件权限

## 5. 远程管理配置

- [x] 安装 OpenSSH Server
- [x] 启动 SSH 服务
- [x] 配置 SSH 端口 `2222`
- [x] 配置 SSH 密钥登录
- [x] 使用 SSH 远程登录 `dev` 用户
- [x] 使用 `rsync` 同步项目文件
- [x] 截图：`systemctl status ssh`
- [x] 截图：`ss -tlnp | grep :2222`
- [x] 截图：SSH 登录成功

## 6. Web站点部署

- [x] 安装 Nginx
- [x] 创建站点目录 `/var/www/practice-blog`
- [x] 编写 Nginx 站点配置
- [x] 编写部署脚本 `scripts/deploy-nginx.sh`
- [x] 上传并同步站点文件
- [x] 浏览器访问部署后的站点
- [x] 截图：`nginx -t`
- [x] 截图：`systemctl status nginx`
- [x] 截图：最终网页访问结果
