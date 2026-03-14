# 🚀 Vercel 部署步骤（我已帮你完成第一步）

## ✅ 已完成

我已经帮你：
1. ✅ 初始化 Git 仓库
2. ✅ 添加 `.gitignore` 文件
3. ✅ 提交所有代码到本地仓库

---

## 📝 你需要做的（5分钟）

### 第1步：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 填写仓库名：`xiaozhi-training`
3. 选择 **Public**（公开）
4. 勾选 "Add a README file"
5. 点击 **Create repository**

### 第2步：推送代码

复制下面的命令，在终端中依次执行（**替换成你的 GitHub 用户名**）：

```bash
cd /Users/mac/.openclaw/workspace/xiaozhi-training

# 替换成你的用户名，比如：
# git remote add origin https://github.com/zhangsan/xiaozhi-training.git
git remote add origin https://github.com/你的用户名/xiaozhi-training.git

# 推送代码
git branch -M main
git push -u origin main
```

### 第3步：部署到 Vercel

1. 打开 https://vercel.com/new
2. 用 GitHub 账号登录
3. 在 "Import Git Repository" 找到 `xiaozhi-training`
4. 点击 **Import**
5. 直接点击 **Deploy**（保持默认配置）
6. 等待 1-2 分钟... ✅

### 第4步：完成！

部署完成后，你会得到一个网址：
```
https://xiaozhi-training-xxxxx.vercel.app
```

这个网址就是你的培训网站！可以分享给学生使用！

---

## 🔧 如果遇到问题

### 问题1：推送时提示用户名/密码
**解决：** 使用 Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens
2. 生成新 Token，勾选 `repo` 权限
3. 推送时用 Token 替代密码

### 问题2：Vercel 部署失败
**解决：** 检查 GitHub 仓库是否包含所有文件，特别是 `index.html`

### 问题3：网站样式乱了
**解决：** 清除浏览器缓存，或硬刷新（Cmd+Shift+R）

---

## 📱 分享给学生

部署完成后，直接把网址发给学生即可！

---

## 🎉 完成！

学生现在可以：
- ✅ 在手机/平板/电脑访问
- ✅ 随时学习 100 道答辩问题
- ✅ 不需要下载任何东西
- ✅ 全球加速访问

---

**祝答辩顺利，拿到大奖！** 🏆
