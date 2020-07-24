# build
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# put REPO name between slashes
npx ng build --prod --base-href=/ng-todo/

# upload to GitHub
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/wolfzxcv/ng-todo.git master:gh-pages

cd -
