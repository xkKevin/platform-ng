# Merge Request Principle
## 1 Overview
- When you want to develop a new feature.
  1. Create a new branch named `feature-xxx` and develop in this branch based on our [development guide](development-guide.md).
  2. After development, lint and commit your code.
  3. (If conflicts exist), fix them.
  4. Push it to origin. 
  5. Go to GitLab, create a merge request based on templates to development branch for your feature and wait for review.
  6. (If rejected), revise your code according to reviewer's suggestion and recommit. 

## 2 Specific Workflow
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
yarn lint

# commit your code with Commitizen for unified and normative commit message
git add .
yarn commit

# NOTE: rebase first, and try to fix conflicts before you push
git fetch origin
git rebase -i origin/development

# (if conflicts) fix your code then
git add .
git rebase --continue

# push it to origin
git push -u origin feature-whatever

# create a merge request based on templates
...
```

Each merge request in development branch will be integrated and deployed in https://platform-ng-dev.projects.zjvis.org/ automatically. In addition, each merge request in master branch means a release and will be deployed in https://platform-ng.projects.zjvis.org/.
