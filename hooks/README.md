# Git Hooks 
This directory contains scripts for git hooks 

## pre-commit
Checks that files are formatted

## pre-push

Runs lint and unit tests

## Installation
From project root directory:
```
 find hooks  -type f -exec ln -s -v  ../../{} .git/{}  \;
```
 