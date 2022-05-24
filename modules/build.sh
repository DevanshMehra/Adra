#!/bin/bash

set -e


emcc ./adra.c \
  -s WASM=1 \
  -I /lame/dist/include \
  -i /lame/dist/lib/libmp3lame.so \
	-s ASSERTIONS=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
	-s EXPORTED_FUNCTIONS="['_malloc', '_free']" \
  -s MODULARIZE=1 \
  -o artifacts/adra.js
