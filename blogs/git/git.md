---
title: 'git常用命令'
---

**1.git配置**
```shell
git config --global user.name ""
git config --global user.email ""
```

**2.查看全局配置**
```shell
git config –list –global
```

**3.查看指定配置**
```shell
git config user.name
git config user.email
```

**4.git初始化**
```shell
git init
```

**5.查看状态**
```shell
git status || git status -s || git status -short
```

**6.工作区到暂存区**
```shell
git add *
git commit - m ""
```

**7.从暂存区恢复文件到工作区**
```shell
git checkout 文件名  (慎用，有风险！！！)
```

**8.查看工作区修改的代码**
```shell
git diff
```

**9.查看已经提交到暂存区的历史版本**
```shell
git log   ||   git reflog
```

**10.恢复文件到指定版本**
```shell
git reset --hard 版本号
```

**11.生成ssh密匙**
```shell
ssh-keygen -t rsa -C "邮箱"
```

**12.将暂存区的上传到github仓库**
```shell
git remote add origin 仓库地址
git push -u origin master
```

**13.从远程仓库克隆到本地**
```shell
git clone 远程仓库地址
```

**14.推、拉代码**
```shell
git pull 拉
git push 推
git push -f  强制推送 
```

**15.创建子分支**
```shell
git checkout -b 分支名
```

**16.查看分支**
```shell
git branch    查看本地分支
git branch -a  查看远程分支
git branch 分支名称 -d  删除本地分支
git branch 分支名称 -D  强制删除本地分支
```