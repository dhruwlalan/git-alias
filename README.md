## git-alias

Declarative & human-friendly aliases for commonly used git commands.

↗https://gitalias.netlify.app/

## Install

Visit [here](https://gitalias.netlify.app/) & download the file `gitconfig.txt` _or_ you can just view [gitconfig.txt](https://github.com/dhruwlalan/git-alias/blob/master/git-config/.gitconfig) then copy all the alias and paste it in your `.gitconfig` under the alias section.

If you can't locate your `.gitconfig`, checkout this Stack Overflow [link](https://stackoverflow.com/q/2114111/7409506).

## Few Examples:

```bash
# check status or repo (git status):
$ git st

# directly push commit to github (git add + git commit + git push):
$ git dctp 'commit-message'

# Sync local repository with remote repository (git fetch + git pull):
$ git sync

# push local branch to github:
$ git push-lb <local-branch-name>

# show graph of commits:
$ git graph

# Plus many more...
```

[↗Checkout full list of aliases with their syntax](https://gitalias.netlify.app/basic)

## Note:

The default **remote** of all aliases is set to `origin`. So if you want to use a different **remote** you will have to manually specify the different **remote**.<br>
Example: (using default remote `origin`)

```bash
# adding a remote:
$ git add-remote <your-remote-url>

# checking remotes:
$ git remote-url
origin  <your-remote-url> (fetch)
origin  <your-remote-url> (push)
```

Example: (using a remote other than `origin`)

```bash
# adding a remote other than origin:
$ git add-remote upstream <your-upstream-url>

# checking remotes:
$ git remote-url
upstream  <your-upstream-url> (fetch)
upstream  <your-upstream-url> (push)
```
