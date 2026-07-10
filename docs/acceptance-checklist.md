# 验收任务清单

## 1. 项目与代码库配置

- [x] 创建 `practice-blog` 项目目录
- [x] 建立 Git 仓库
- [x] 绑定 GitHub 远程仓库
- [x] 推送到 `main` 分支
- [ ] 截图：VS Code 项目结构
- [ ] 截图：GitHub 仓库页面
- [ ] 截图：`git log --oneline`

## 2. Web运行环境

- [x] 创建可运行静态站点
- [x] 编写 `server.js` 本地预览服务
- [x] 编写 `package.json`
- [ ] 截图：Node 版本
- [ ] 截图：本地服务启动成功
- [ ] 截图：浏览器访问首页

## 3. Linux环境配置

- [ ] 安装 Ubuntu Server 虚拟机
- [ ] 配置 NAT + Host-Only 网络
- [ ] 配置主机名
- [ ] 配置环境变量
- [ ] 配置 `.bashrc` 或 `/etc/profile`
- [ ] 截图：`ip addr`
- [ ] 截图：`hostnamectl`
- [ ] 截图：`echo $PATH`

## 4. Linux账户配置

- [ ] 创建 `dev` 用户
- [ ] 配置 home 目录
- [ ] 添加 sudo 权限
- [ ] 演示关键文件权限
- [ ] 截图：`id dev`
- [ ] 截图：`groups dev`
- [ ] 截图：`ls -la /home/dev`
- [ ] 截图：`chmod/chown` 操作

## 5. 远程管理配置

- [ ] 安装 OpenSSH Server
- [ ] 启动 SSH 服务
- [ ] 检查 SSH 端口
- [ ] 配置密钥登录
- [ ] 使用 SSH 远程登录
- [ ] 使用 `scp` 或 `rsync` 传输文件
- [ ] 截图：`systemctl status ssh`
- [ ] 截图：`ss -tlnp | grep ssh`
- [ ] 截图：SSH 登录成功

## 6. Web站点部署

- [ ] 安装 Nginx
- [ ] 创建站点目录
- [ ] 编写 Nginx 站点配置
- [ ] 编写或整理部署脚本
- [ ] 上传站点文件
- [ ] 浏览器访问部署后的站点
- [ ] 截图：`nginx -t`
- [ ] 截图：`systemctl status nginx`
- [ ] 截图：最终网页访问结果
