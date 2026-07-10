# 部署说明

## 一、本地预览

```powershell
node server.js
```

访问：`http://localhost:4000`

## 二、Linux 虚拟机准备

```bash
sudo apt update
sudo apt install nginx openssh-server rsync -y
sudo systemctl enable --now ssh
sudo systemctl enable --now nginx
```

建议虚拟机使用 Host-Only 静态地址，例如 `192.168.56.101`。

## 三、上传站点文件

在本机项目目录执行：

```bash
rsync -avz --delete ./ dev@192.168.56.101:/home/dev/practice-blog/
```

在虚拟机中发布到 Nginx 目录：

```bash
sudo mkdir -p /var/www/practice-blog
sudo rsync -av --delete /home/dev/practice-blog/ /var/www/practice-blog/
sudo chown -R www-data:www-data /var/www/practice-blog
```

## 四、使用部署脚本

仓库已经提供脚本：`scripts/deploy-nginx.sh`。把项目同步到虚拟机后，在虚拟机里执行：

```bash
cd ~/practice-blog
chmod +x scripts/deploy-nginx.sh
./scripts/deploy-nginx.sh
```

脚本会自动完成：

- 创建 `/var/www/practice-blog`
- 同步静态文件
- 写入 Nginx 站点配置
- 执行 `nginx -t`
- 重载 Nginx

## 五、手动配置 Nginx

如果需要手动操作，可执行：

```bash
sudo nano /etc/nginx/sites-available/practice-blog
```

写入：

```nginx
server {
    listen 80;
    server_name _;
    root /var/www/practice-blog;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/practice-blog /etc/nginx/sites-enabled/practice-blog
sudo nginx -t
sudo systemctl reload nginx
```

## 六、验收截图

- `ssh dev@192.168.56.101` 登录成功
- `systemctl status nginx` 服务运行
- 浏览器访问 `http://192.168.56.101`
- Git 提交历史和远程仓库页面
