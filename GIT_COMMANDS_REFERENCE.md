# 📝 Quick Git & GitHub Commands Reference

## 🔧 Initial Setup (One Time)

### 1. Initialize Git Repository
```bash
git init
```

### 2. Add Remote Repository
```bash
# Replace USERNAME and REPO_NAME with your GitHub details
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Or use SSH (faster, requires SSH key setup)
git remote add origin git@github.com:USERNAME/REPO_NAME.git
```

### 3. Verify Remote
```bash
git remote -v
```

---

## 📤 Daily Development Workflow

### 1. Check Status
```bash
git status
```

### 2. Stage Changes
```bash
# Stage all changes
git add .

# Stage specific file
git add path/to/file

# Stage with interactive prompt
git add -p
```

### 3. Commit Changes
```bash
# Commit with message
git commit -m "Your descriptive message"

# Commit with longer message (opens editor)
git commit

# Amend last commit
git commit --amend
```

### 4. Push to GitHub
```bash
# Push to main branch
git push origin main

# Push and set upstream
git push -u origin main

# Force push (use with caution!)
git push -f origin main
```

### 5. Pull Latest Changes
```bash
# Pull from remote
git pull origin main

# Fetch only (doesn't merge)
git fetch origin
```

---

## 🌿 Working with Branches

### Create Branch
```bash
# Create new branch locally
git branch feature/feature-name

# Create and switch to new branch
git checkout -b feature/feature-name
# OR (newer syntax)
git switch -c feature/feature-name
```

### Switch Branches
```bash
# Switch to branch
git checkout branch-name
# OR (newer syntax)
git switch branch-name
```

### List Branches
```bash
# List local branches
git branch

# List all branches (local + remote)
git branch -a
```

### Delete Branch
```bash
# Delete local branch
git branch -d branch-name

# Force delete
git branch -D branch-name

# Delete remote branch
git push origin --delete branch-name
```

### Push Branch to GitHub
```bash
git push -u origin feature/feature-name
```

---

## 🔄 Merging & Pull Requests

### Merge Branch Locally
```bash
# Switch to main
git checkout main

# Merge feature branch
git merge feature/feature-name

# Delete feature branch after merge
git branch -d feature/feature-name
```

### Pull Request via GitHub
1. Push your branch to GitHub
2. Go to repository on GitHub
3. Click "Compare & pull request"
4. Add description and create PR
5. Request review (if team)
6. Merge PR on GitHub
7. Delete branch

---

## 🔍 Viewing History

### View Commit Log
```bash
# View last 10 commits
git log -10

# View with pretty format
git log --oneline --graph --all

# View commits for specific file
git log path/to/file

# View commits by author
git log --author="Author Name"
```

### View Changes
```bash
# View unstaged changes
git diff

# View staged changes
git diff --cached

# View changes in specific file
git diff path/to/file

# View changes between commits
git diff COMMIT1 COMMIT2
```

### Show Commit Details
```bash
git show COMMIT_HASH
```

---

## ⚠️ Undo Changes

### Discard Unstaged Changes
```bash
# Discard all unstaged changes
git checkout .

# Discard specific file
git checkout path/to/file

# OR (newer syntax)
git restore path/to/file
```

### Unstage Changes
```bash
# Unstage all
git reset

# Unstage specific file
git reset path/to/file
```

### Revert Commit (Safe)
```bash
# Revert specific commit (creates new commit)
git revert COMMIT_HASH
```

### Reset to Previous Commit (Dangerous!)
```bash
# Keep changes but reset commits
git reset --soft HEAD~1

# Discard changes and reset
git reset --hard HEAD~1
```

---

## 🏷️ Tags (Releases)

### Create Tag
```bash
# Lightweight tag
git tag v1.0.0

# Annotated tag (recommended)
git tag -a v1.0.0 -m "Version 1.0.0 Release"
```

### Push Tags
```bash
# Push specific tag
git push origin v1.0.0

# Push all tags
git push origin --tags
```

### List Tags
```bash
git tag

# Show tag details
git show v1.0.0
```

---

## 🚨 Stashing (Save Work Temporarily)

### Stash Changes
```bash
# Stash current changes
git stash

# Stash with message
git stash save "Work in progress"

# Stash including untracked files
git stash -u
```

### List Stashes
```bash
git stash list
```

### Apply Stash
```bash
# Apply most recent stash
git stash pop

# Apply specific stash
git stash pop stash@{0}

# Apply without removing
git stash apply
```

### Delete Stash
```bash
# Delete specific stash
git stash drop stash@{0}

# Delete all stashes
git stash clear
```

---

## 📊 Configuration

### Set User Info
```bash
# Set globally
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set for current repository
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### View Configuration
```bash
git config --list
git config user.name
```

---

## 💡 Common Workflow Examples

### Feature Development Workflow
```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes, commit frequently
git add .
git commit -m "Implement feature part 1"

# 3. Push to GitHub
git push -u origin feature/new-feature

# 4. Create Pull Request on GitHub

# 5. After merge, delete branch
git branch -d feature/new-feature
```

### Bug Fix Workflow
```bash
# 1. Create hotfix branch
git checkout -b hotfix/bug-name

# 2. Fix bug and commit
git add .
git commit -m "Fix: description of bug"

# 3. Push and create PR
git push -u origin hotfix/bug-name

# 4. After merge to main
git checkout main
git pull origin main
```

### Release Workflow
```bash
# 1. Create release branch
git checkout -b release/v1.1.0

# 2. Update version numbers
git add .
git commit -m "Bump version to 1.1.0"

# 3. Push to GitHub
git push -u origin release/v1.1.0

# 4. Create PR, merge to main
# 5. Create tag
git tag -a v1.1.0 -m "Release version 1.1.0"

# 6. Push tag
git push origin v1.1.0
```

---

## 🔗 Useful Links

- [Git Official Docs](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

---

## 📌 Pro Tips

1. **Commit Often**: Make small, focused commits
2. **Write Good Messages**: Use present tense, be descriptive
3. **Pull Before Push**: Always `git pull` before `git push`
4. **Use Branches**: Never work directly on main
5. **Review Changes**: Use `git diff` before committing
6. **Keep History Clean**: Use squash commits for fixes
7. **Backup Important Work**: Always push to remote

---

**Need help?** Run `git --help` or `git <command> --help`
