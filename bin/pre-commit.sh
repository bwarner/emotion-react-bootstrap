#! /bin/sh

jsfiles=$(git diff --cached --name-only --diff-filter=ACM | grep '\.jsx\?$' | tr '\n' ' ')
[ -z "$jsfiles" ] && exit 0

echo $jsfiles
diffs=$(node_modules/.bin/prettier-eslint --list-different $jsfiles)
[ -z "$diffs" ] && exit 0

echo >&2 "Javascript files must be formatted with prettier. Please run:"
echo >&2 "npm run format"

exit 1
