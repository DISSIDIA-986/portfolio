#!/bin/bash

# 确定当前使用的主分支名称（master 或 main）
if git show-ref --verify --quiet refs/heads/main; then
  PRIMARY_BRANCH="main"
elif git show-ref --verify --quiet refs/heads/master; then
  PRIMARY_BRANCH="master"
else
  echo "Error: Neither main nor master branch found"
  exit 1
fi

# 保存当前分支名称以便后续恢复
CURRENT_BRANCH=$(git branch --show-current)

echo "Current branch: $CURRENT_BRANCH"
echo "Primary branch: $PRIMARY_BRANCH"
echo "Rebuilding gh-pages branch..."

# 确保主分支是最新的
git checkout $PRIMARY_BRANCH
git pull origin $PRIMARY_BRANCH

# 检查是否存在远程 gh-pages 分支，如果存在则删除
if git ls-remote --heads origin gh-pages | grep gh-pages > /dev/null; then
    echo "Removing existing gh-pages branch..."
    git push origin --delete gh-pages
fi

# 检查是否存在本地 gh-pages 分支，如果存在则删除
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "Removing local gh-pages branch..."
    git branch -D gh-pages
fi

# 从主分支创建新的 gh-pages 分支
echo "Creating new gh-pages branch from $PRIMARY_BRANCH..."
git checkout -b gh-pages

# 备份当前 package.json
cp package.json package.json.original

# 修改 package.json，添加 homepage 配置
echo "Updating package.json with homepage configuration..."
sed -i.bak 's/"name": "portfolio"/"homepage": "https:\/\/dissidia-986.github.io\/portfolio",\n  "name": "portfolio"/' package.json
rm package.json.bak

# 提交更改
echo "Committing changes..."
git add package.json
git commit -m "Add homepage configuration for GitHub Pages"

# 推送到远程仓库
echo "Pushing gh-pages branch to remote..."
git push -u origin gh-pages

# 部署到 GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

# 恢复到之前的分支
echo "Restoring to original branch: $CURRENT_BRANCH"
git checkout $CURRENT_BRANCH

# 如果在主分支上，恢复原始的 package.json
if [ "$CURRENT_BRANCH" == "$PRIMARY_BRANCH" ]; then
    echo "Restoring original package.json..."
    mv package.json.original package.json
else
    rm package.json.original
fi

echo "gh-pages branch rebuild and deployment completed."