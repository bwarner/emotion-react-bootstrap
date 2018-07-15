#! /bin/sh 
set -e

remote="$1"
url="$2"

z40=0000000000000000000000000000000000000000
skipTests=

git fetch

while read local_ref local_sha remote_ref remote_sha
do
  echo $local_sha $local_ref
  if [ "$local_sha" = $z40 ]; then
    # Handle delete
    skipTests=1
  elif [ "$(git show --oneline --name-only | tail -1 | grep '.js')" == "" ]; then
    # Short circuit changes that don't impact js directly...
    skipTests=1
  fi
done


if [ "$skipTests" = "" ]; then
  echo Running tests
  npm run lint
  npm run jest
fi
