---
layout: "@/layouts/PostLayout.astro"
title: "How to Use Git?"
description: "This is the first tutorial on how to use Git."
author: "Romain Mularczyk"
topic: "Git"
tags: ["git", "learn", "introduction"]
published_at: 2024-12-02
next: "learn-git-advanced"
---

First, note that you can get documentation for a command such as `git log --graph` with:

```shell
$ man git-log
```

or:

```shell
$ git help log
```

With the latter, you can use the manual viewer of your choice; see [git-help[2]](https://git-scm.com/docs/git-help2) [git-help[1]](https://git-scm.com/docs/git-help) for more information.

It is a good idea to introduce yourself to Git with your name and public email address before doing any operation. The easiest way to do so is:

```shell
$ git config --global user.name "Your Name Comes Here"
$ git config --global user.email you@yourdomain.example.com
```

# Importing a new project

Assume you have a tarball `project.tar.gz` with your initial work. You can place it under Git revision control as follows.

```shell
$ tar xzf project.tar.gz
$ cd project
$ git init
```

Git will reply

```txt
Initialized empty Git repository in .git/
```

You've now initialized the working directory—you may notice a new directory created, named `.git`.

Next, tell Git to take a snapshot of the contents of all files under the current directory (note the `.`), with `git add`:

```shell
$ git add .
```

This snapshot is now stored in a temporary staging area which Git calls the "index". You can permanently store the contents of the index in the repository with `git commit`:

```shell
$ git commit
```

This will prompt you for a commit message. You've now stored the first version of your project in Git.

# Making changes

Modify some files, then add their updated contents to the index:

```shell
$ git add file1 file2 file3
```

You are now ready to commit. You can see what is about to be committed using `git diff` with the `--cached` option:

```shell
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)

	modified:   file1
	modified:   file2
	modified:   file3
```

If you need to make any further adjustments, do so now, and then add any newly modified content to the index. Finally, commit your changes with:

```shell
$ git commit
```

This will again prompt you for a message describing the change, and then record a new version of the project.

Alternatively, instead of running `git add` beforehand, you can use

```shell
$ git commit -a
```

which will automatically notice any modified (but not new) files, add them to the index, and commit, all in one step.

A note on commit messages: Though not required, it's a good idea to begin the commit message with a single short (no more than 50 characters) line summarizing the change, followed by a blank line and then a more thorough description. The text up to the first blank line in a commit message is treated as the commit title, and that title is used throughout Git. For example, [git-format-patch[1]](https://git-scm.com/docs/git-format-patch) turns a commit into email, and it uses the title on the Subject line and the rest of the commit in the body.

## Git tracks content not files

Many revision control systems provide an `add` command that tells the system to start tracking changes to a new file. Git's `add` command does something simpler and more powerful: `git add` is used both for new and newly modified files, and in both cases it takes a snapshot of the given files and stages that content in the index, ready for inclusion in the next commit**.**

# Viewing project history

At any point you can view the history of your changes using

```shell
$ git log
```

If you also want to see complete diffs at each step, use

```shell
$ git log -p
```

Often the overview of the change is useful to get a feel of each step

```shell
$ git log --stat --summary
```

# Managing branches

A single Git repository can maintain multiple branches of development. To create a new branch named `experimental`, use

```shell
$ git branch experimental
```

If you now run

```shell
$ git branch
```

you'll get a list of all existing branches:

```txt
  experimental
* master
```

The `experimental` branch is the one you just created, and the `master` branch is a default branch that was created for you automatically. The asterisk marks the branch you are currently on; type

```shell
$ git switch experimental
```

to switch to the `experimental` branch. Now edit a file, commit the change, and switch back to the `master` branch:

```shell
# (edit file)
$ git commit -a
$ git switch master
```

Check that the change you made is no longer visible, since it was made on the `experimental` branch and you're back on the `master` branch.

You can make a different change on the `master` branch:

```shell
# (edit file)
$ git commit -a
```

at this point the two branches have diverged, with different changes made in each. To merge the changes made in experimental into master, run

```shell
$ git merge experimental
```

If the changes don't conflict, you're done. If there are conflicts, markers will be left in the problematic files showing the conflict;

```shell
$ git diff
```

will show this. Once you've edited the files to resolve the conflicts,

```shell
$ git commit -a
```

will commit the result of the merge. Finally,

```shell
$ gitk
```

will show a nice graphical representation of the resulting history.

At this point you could delete the `experimental` branch with

```shell
$ git branch -d experimental
```

This command ensures that the changes in the `experimental` branch are already in the current branch.

If you develop on a branch `crazy-idea`, then regret it, you can always delete the branch with

```shell
$ git branch -D crazy-idea
```

Branches are cheap and easy, so this is a good way to try something out.
