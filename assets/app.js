const scoreItems = [
  {
    title: '项目与代码库配置',
    score: '10',
    content: '项目配置、编辑器配置、Git 配置等',
    status: 'done',
    statusText: '已补真实截图',
    evidence: ['GitHub 仓库', '阶段提交记录', '项目目录结构']
  },
  {
    title: 'Web 运行环境',
    score: '10',
    content: '语言包、包管理器、关键软件包及配置等',
    status: 'done',
    statusText: '已补真实截图',
    evidence: ['Node 本地服务', 'package.json', '浏览器访问截图']
  },
  {
    title: 'Linux 环境配置',
    score: '10',
    content: '系统 profile 配置、用户配置、环境变量等',
    status: 'done',
    statusText: '已补真实截图',
    evidence: ['ip addr', 'hostnamectl', '.bashrc / profile']
  },
  {
    title: 'Linux 账户配置',
    score: '10',
    content: '账户配置、Home 配置、关键文件的权限配置等',
    status: 'done',
    statusText: '已补真实截图',
    evidence: ['id dev', 'groups dev', 'chmod / chown']
  },
  {
    title: '远程管理配置',
    score: '10',
    content: 'SSH 服务、端口配置、登录配置等',
    status: 'done',
    statusText: '已补真实截图',
    evidence: ['SSH 服务状态', '端口监听', '远程登录']
  },
  {
    title: 'Web 站点部署',
    score: '10',
    content: '可运行的站点、基本功能、部署脚本',
    status: 'done',
    statusText: '已部署验证',
    evidence: ['Nginx 配置', '部署脚本', '最终访问页面']
  }
];

const evidence = [
  ['先展示结果', '打开首页和 GitHub 仓库，让老师先看到完整项目，而不是先看零散命令。'],
  ['再展示过程', '用 git log、实验记录文章和 docs 文档说明项目是分阶段完成的。'],
  ['按评分项截图', '每个 10 分项至少准备 1 张关键截图，截图文件名和报告章节保持一致。'],
  ['最后讲升级', '说明后续可以加 GitHub Pages、自动部署、更多真实实验截图和技术博客内容。']
];

const posts = [
  {
    title: '实验一：项目与代码库配置',
    desc: '展示项目结构、Git 初始化、提交历史、远程仓库和编辑器配置。',
    href: 'posts/git-workflow.html'
  },
  {
    title: '实验二：Linux 环境配置',
    desc: '整理虚拟机网络、系统 profile、用户环境变量和账户权限配置。',
    href: 'posts/linux-config.html'
  },
  {
    title: '实验三：Web 站点部署',
    desc: '记录 SSH 远程管理、文件同步、Nginx 站点配置和访问验证。',
    href: 'posts/web-deploy.html'
  }
];

const commands = [
  {
    title: '本地运行',
    desc: '启动本地预览服务，答辩时直接打开网页。',
    code: 'node server.js'
  },
  {
    title: '查看提交',
    desc: '证明项目有阶段记录，不是一次性拼出来。',
    code: 'git log --oneline --decorate -5'
  },
  {
    title: '部署到 Linux',
    desc: '把静态站点同步到虚拟机，再交给 Nginx 提供访问。',
    code: 'rsync -avz --delete ./ dev@192.168.56.101:/home/dev/practice-blog/'
  }
];

function createCard(className, content) {
  const node = document.createElement('article');
  node.className = className;
  node.innerHTML = content;
  return node;
}

function renderScoreCards() {
  const scoreList = document.querySelector('#score-list');
  if (!scoreList) return;

  scoreItems.forEach((item) => {
    const evidenceList = item.evidence.map((entry) => `<li>${entry}</li>`).join('');
    scoreList.appendChild(createCard('score-card', `
      <header>
        <div>
          <h3>${item.title}</h3>
          <span class="status-tag ${item.status}">${item.statusText}</span>
        </div>
        <span class="score-value">${item.score}分</span>
      </header>
      <p>${item.content}</p>
      <ul>${evidenceList}</ul>
    `));
  });
}

function renderEvidenceCards() {
  const evidenceList = document.querySelector('#evidence-list');
  if (!evidenceList) return;

  evidence.forEach(([title, body]) => {
    evidenceList.appendChild(createCard('evidence-card', `
      <strong>${title}</strong>
      <p>${body}</p>
    `));
  });
}

function renderPostCards() {
  const postList = document.querySelector('#post-list');
  if (!postList) return;

  posts.forEach((post) => {
    postList.appendChild(createCard('post-card', `
      <h3>${post.title}</h3>
      <p>${post.desc}</p>
      <a href="${post.href}">打开记录</a>
    `));
  });
}

function renderCommandCards() {
  const commandList = document.querySelector('#command-list');
  if (!commandList) return;

  commands.forEach((command) => {
    commandList.appendChild(createCard('command-card', `
      <h3>${command.title}</h3>
      <p>${command.desc}</p>
      <pre><code>${command.code}</code></pre>
      <button class="copy-button" type="button" data-copy="${command.code.replaceAll('"', '&quot;')}">复制命令</button>
    `));
  });
}

function setupCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const original = button.textContent;
      const text = button.dataset.copy;

      const fallbackCopy = () => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        const ok = document.execCommand('copy');
        textarea.remove();
        return ok;
      };

      try {
        if (navigator.clipboard) {
          try {
            await navigator.clipboard.writeText(text);
          } catch {
            if (!fallbackCopy()) throw new Error('copy failed');
          }
        } else {
          if (!fallbackCopy()) throw new Error('copy failed');
        }
        button.textContent = '已复制';
      } catch {
        button.textContent = '手动复制';
      }
      window.setTimeout(() => {
        button.textContent = original;
      }, 1600);
    });
  });
}

renderScoreCards();
renderEvidenceCards();
renderPostCards();
renderCommandCards();
setupCopyButtons();
