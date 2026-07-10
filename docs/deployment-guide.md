# 部署说明

本项目当前使用 Ubuntu 22.04 WSL2 作为 Linux 实验环境，SSH 端口为 `2222`，Nginx 站点端口为 `8080`。

## 一、本地预览

```powershell
node server.js
```

访问：

```text
http://localhost:4000
```

## 二、Linux 环境准备

Ubuntu 中安装所需软件：

```bash
sudo apt update
sudo apt install nginx openssh-server rsync -y
```

创建并检查 `dev` 用户：

```bash
sudo useradd -m -s /bin/bash dev
sudo usermod -aG sudo dev
id dev
groups dev
```

## 三、SSH 配置

SSH 服务配置为端口 `2222`，并使用密钥登录。

```bash
sudo nano /etc/ssh/sshd_config
```

关键配置：

```text
Port 2222
PubkeyAuthentication yes
PasswordAuthentication no
```

重启并检查：

```bash
sudo systemctl restart ssh
ss -tlnp | grep :2222
systemctl status ssh
```

Windows 侧登录示例：

```powershell
ssh -i ~/.ssh/practice_wsl_ed25519 -p 2222 dev@<Ubuntu-IP>
```

## 四、同步站点文件

在 Ubuntu 中，项目位于：

```text
/home/dev/practice-blog
```

也可以用 `rsync` 重新同步：

```bash
rsync -av --delete /mnt/c/Users/liuzhanxian/Desktop/1/practice-blog/ /home/dev/practice-blog/
```

## 五、使用部署脚本

仓库提供部署脚本：

```bash
cd ~/practice-blog
chmod +x scripts/deploy-nginx.sh
./scripts/deploy-nginx.sh
```

默认部署端口为 `8080`。脚本会自动完成：

- 创建 `/var/www/practice-blog`
- 同步静态文件
- 写入 Nginx 站点配置
- 执行 `nginx -t`
- 重载 Nginx

## 六、访问和验收

Windows 浏览器访问，推荐使用 Ubuntu 的 WSL 内网 IP：

```text
http://<Ubuntu-IP>:8080
```

可用下面命令查看 Ubuntu IP：

```bash
hostname -I
```

验收截图建议：

- `systemctl status ssh`
- `ss -tlnp | grep :2222`
- SSH 登录成功
- `nginx -t`
- `systemctl status nginx`
- 浏览器访问 `http://<Ubuntu-IP>:8080`
