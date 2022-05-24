#!/bin/bash
set -ev
cd modules
docker run --rm -v $(pwd):/src devanshmehra/emscripten-lame bash ./build.sh

