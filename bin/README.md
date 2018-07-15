# Git Hooks 
This directory contains scripts for git hooks 

## pre-commit
Checks that files are formatted

## pre-push

Runs lint and unit tests

## Installation
From project root directory:
```
ln -s -v ../../bin/pre-push.sh .git/hooks/pre-push
ln -s -v ../../bin/pre-commit.sh .git/hooks/pre-commit
```
 