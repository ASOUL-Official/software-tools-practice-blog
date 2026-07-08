const workflow = [
  {
    title: '项目与代码库配置',
    body: '建立项目目录、初始化 Git 仓库、配置提交身份、按阶段保留提交历史。'
  },
  {
    title: 'Web 运行环境',
    body: '使用本地 Node 服务预览静态站点，完成页面、样式、脚本和资源组织。'
  },
  {
    title: 'Linux 环境与账户',
    body: '在虚拟机中配置主机名、IP、用户、权限、环境变量和常用命令别名。'
  },
  {
    title: '远程管理与部署',
    body: '启用 SSH、配置密钥登录，用 rsync 或 scp 上传站点到 Nginx 目录。'
  }
];

const evidence = [
  ['版本控制', 'Git 初始化、提交历史、远程仓库地址和分支截图。'],
  ['运行环境', 'Node 版本、本地预览地址、页面访问截图。'],
  ['Linux 配置', '静态 IP、hostname、环境变量、权限命令结果。'],
  ['部署结果', 'SSH 登录、文件同步、Nginx 状态、最终访问页面。']
];

const posts = [
  {
    title: '实验一：项目与代码库配置',
    desc: '记录项目目录、Git 初始化、提交规范和远程仓库配置。',
    href: 'posts/git-workflow.html'
  },
  {
    title: '实验二：Linux 环境配置',
    desc: '记录虚拟机网络、用户权限、配置文件和环境变量。',
    href: 'posts/linux-config.html'
  },
  {
    title: '实验三：Web 站点部署',
    desc: '记录 SSH 远程登录、静态文件同步和 Nginx 部署过程。',
    href: 'posts/web-deploy.html'
  }
];

function createCard(className, content) {
  const node = document.createElement('article');
  node.className = className;
  node.innerHTML = content;
  return node;
}

const workflowList = document.querySelector('#workflow-list');
workflow.forEach((item, index) => {
  workflowList.appendChild(createCard('step', `
    <span class="step-number">${index + 1}</span>
    <h3>${item.title}</h3>
    <p>${item.body}</p>
  `));
});

const evidenceList = document.querySelector('#evidence-list');
evidence.forEach(([title, body]) => {
  evidenceList.appendChild(createCard('evidence-card', `
    <strong>${title}</strong>
    <p>${body}</p>
  `));
});

const postList = document.querySelector('#post-list');
posts.forEach((post) => {
  postList.appendChild(createCard('post-card', `
    <h3>${post.title}</h3>
    <p>${post.desc}</p>
    <a href="${post.href}">打开记录</a>
  `));
});
