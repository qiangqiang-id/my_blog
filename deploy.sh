#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件, vue-press 执行构建
npm run blogs:build

# 进入生成的文件夹
cd docs /public

# 如果是发布到自定义域名
echo 'blog.theqiang.space' > CNAME

git init
git add -A
git commit -m 'deploy'

# 发布到 自己的服务器gitserver， 关键代码
git remote add origin root@104.168.214.106:/git_repos/blog.git
git push -f root@104.168.214.106:/git_repos/simple-ui.git master

cd -