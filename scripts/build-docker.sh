#!/bin/sh

set -ev


NAME=emscripten-lame

docker build . \
    -t devanshmehra/$NAME \
    -t devanshmehra/$NAME:`date +%Y-%m-%d` \
    -f ./Dockerfile \

docker push devanshmehra/$NAME
