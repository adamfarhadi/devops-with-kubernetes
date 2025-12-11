#!/bin/sh
set -e

url=$(curl -Ls -o /dev/null -w %{url_effective} https://en.wikipedia.org/wiki/Special:Random)

echo "Wikipedia URL: $url"

todoAppBackendResponse=$(curl -i -X POST -H "Content-Type: application/json" -d "{\"content\":\"Read $url\"}" http://$TODO_APP_BACKEND_SVC_SERVICE_HOST:$TODO_APP_BACKEND_SVC_SERVICE_PORT/api/todos)

echo "POST response: $todoAppBackendResponse"