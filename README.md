# Instant-Preview

[![Maintainability](https://github.com/voronin-ivan/instant-preview/workflows/CI-CD/badge.svg)](https://github.com/voronin-ivan/instant-preview/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/c660873893ed4756ad1d/maintainability)](https://codeclimate.com/github/voronin-ivan/instant-preview/maintainability)

This PWA helps to preview instagram-profile with custom parameters (description, count of followers, etc.) in a few clicks.

Just add main information and upload photos. Feel free to swap posts and highlights until achieve the best visual combination. Download the result and present it to your clients or colleagues. Publish materials in the chosen order, update profile settings and draw inspiration from done work.
<h3 align="center"><a href="https://instant-preview.com">www.instant-preview.com</a></h3>
<p align="center">
    <img src="https://raw.githubusercontent.com/voronin-ivan/instant-preview/master/src/static/img/og_image.png" width="600px" height="315px">
</p>

### Development

#### Install dependencies
```sh
nvm use
yarn
```

#### Run development-mode

```sh
yarn start
```

#### Run linter

```sh
yarn lint
```

#### Run build

```sh
yarn build
```

#### Run unit tests

```sh
yarn unit
```

#### Run e2e tests

```sh
yarn e2e:docker
```

#### Run size-limit (includes build)

```sh
yarn size
```

#### Run bundle-analyzer

```sh
yarn analyzer
```
