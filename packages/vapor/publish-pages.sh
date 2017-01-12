#!/bin/bash

function echoDo {
  echo "> $@"
  eval $@
}

( echoDo cd _gh_pages
  echoDo git init
  echoDo git config user.name "wfortin"
  echoDo git config user.email "willyfortin@gmail.com"
  echoDo git add .
  echoDo git commit -m "Autodeploy to Github Pages"
  echoDo git push --force --quiet "https://${GH_TOKEN}@github.com/coveo/vapor.git" master:gh-pages > /dev/null 2>&1
)
