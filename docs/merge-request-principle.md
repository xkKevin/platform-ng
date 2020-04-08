```bash
# fetch remote first
git fetch origin

# checkout a feature branch off the origin/development
git checkout -b feature-whatever origin/development

# working on your code
...
# check diff and affected files
git diff origin/development
git status

# Do your coding part
# Do not forget to lint and format your file before commit
yarn run lint

# commit your code
# please avoid the use `git commit --amend` since we want a complete commit history
git add .
git commit -m "a reasonable commit message" 

# NOTE: rebase first, and try to fix conflicts before you push
git fetch origin
git rebase -i origin/development

# (if conflicts) fix your code then
git add .
git rebase --continue

# push it to origin
git push -u origin feature-whatever
```
Next, go to GitLab and create a merge request to development branch for your feature.
