# Adra


A secure MP3 encoder, powered by Web Assembly. [Try it out.](https://adra.netlify.app/)


## How does it work?

The underlying tech stack is based on the following:
* [`libmp3lame`](https://lame.sourceforge.io/), a classic C library for encoding audio to MP3
* [`emscripten`](https://emscripten.org/) is used to compile `libmp3lame` and C code to Web Assembly.
* [Web Assembly](https://developer.mozilla.org/en-US/docs/WebAssembly) runs native code on the client, allowing us to do memory-heavy stuff in the browser.
* All the emscripten web assembly action is done in Docker, for better portability and C lang dependency management.
* Frontend offloads the web assembly operations to [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker) for better performance.
* Frontend built with React, Emotion, and Parcel Bundler




#### Prerequisites
* yarn v1.0.0 or higher
* docker
* GNU make



#### Commands
* `make install` - install docker deps and frontend deps
* `make build-docker` - builds the docker image, the environment for emscripten to run in, compiles `libmp3lame`
* `make build-wasm` - compiles the web assembly + javascript wrapper
* `yarn start` - run the dev server, open `http://localhost:1234/` to see the app running
* `yarn build` - build and prerender for prod deployment

If you experience inconveniently long install times, please try running this command before `make install`:
```
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
```
