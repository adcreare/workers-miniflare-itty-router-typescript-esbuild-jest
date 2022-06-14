# CloudFlare workers Example Project using itty-router + miniflare + typescript + esm

Also using the new CloudFlare JavaScript modules for workers https://blog.cloudflare.com/workers-javascript-modules/

Derived from [MrBbot's excellent example worker example](https://github.com/mrbbot/miniflare-typescript-esbuild-jest/)

This is an example [Cloudflare Workers](https://workers.cloudflare.com/) project that uses following

- [itty-router](https://github.com/kwhitley/itty-router/) Tiny, zero-dependency router with route param and query parsing - built for Cloudflare Workers
- [Miniflare](https://github.com/cloudflare/miniflare) for local development,
- [TypeScript](https://www.typescriptlang.org/),
- [esbuild](https://github.com/evanw/esbuild) for bundling,
- [Jest](https://jestjs.io/) for testing, with [Miniflare's custom Jest environment](https://v2.miniflare.dev/jest.html)
- With support for [Wallabyjs](https://wallabyjs.com/) for crazy fast real time test running

```shell
# Install dependencies
$ npm install
# Start local development server with live reload
$ npm run dev
# Run tests
$ npm test
# Run type checking
$ npm run types:check
```
