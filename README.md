# Svelte Monorepo Starter

<p align="center">
  <a href="https://studiobear.semaphoreci.com/badges/svelte-monorepo-starter/branches/master">
    <img src="https://studiobear.semaphoreci.com/badges/gatsby-starter-typescript-testing/branches/master.svg?style=shields" alt="CI Status of master branch on semaphoreci.com" />
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/Studiobear/svelte-monorepo-starter">
</p>

This starter was created for Studiobear projects. If the features fulfill your desires, use as pleases! Will happily consider reconmendations and adding features, but will also remain opinonated.

This is a _template repository_ and can easily be used by visiting the [repo on GitHub](https://github.com/Studiobear/svelte-monorepo-starter) and clicking the `Use this template` button next to `Clone or Download`. A template repository provides these differences:

- A new fork includes the entire commit history of the parent repository, while a repository created from a template starts with a single commit.
- Commits to a fork don't appear in your contributions graph, while commits to a repository created from a template do appear in your contribution graph.
- A fork can be a temporary way to contribute code to an existing project, while creating a repository from a template starts a new project quickly.

## Features

- Monorepo management by [Lerna](https://lerna.js.org/) and [Yarn Workspaces](https://yarnpkg.com/features/workspaces)
- Initial setup emphasizes frontend development using Svelte, but as a monorepo should be flexible enough for anything
- CI configured with enforcing of dependency checking, linting and testing
- Sample CI/CD setup using [Semaphore CI](https://semaphoreci.com)/Github and [Netlify](https://.netlify.com)
- A [Commitizen](https://github.com/commitizen/cz-cli) friendly repo for standardized commit messages and changelog generation

## Getting Started

Replicate template via [Github](https://github.com/Studiobear/svelte-monorepo-starter) UI.

```
# install deps
yarn

# init lerna
lerna bootstrap

# check monorepo setup
yarn check-packages

# if issues, run
yarn fix-packages

# try running component library storybook
yarn workspace my-svelte-component-library storybook

# above command equivalent using lerna:

lerna run storybook --scope my-svelte-component-library

# try running svelte app in development
yarn workspace my-site dev

# run all tests in monorepo
lerna run test

```

## File Structure

A truncated view looking at the most important parts of the structure

    .
    ├── .semaphore
    ├── apps
    │   └── my-site/...
    ├── libs
    │   └── my-svelte-component-library/...
    ├── ...
    ├── package.json
    └── ...

1.  **`.semaphore`**: Folder containing pipeline files for semaphore ci
2.  **`apps` & `libs`**: The default lerna monorepo uses `packages` dir for sub-repos. You can change this configuration in the lerna.json ("packages") and package.json file ("workspaces")
3.  **`apps/my-site`**: A sample [Svelte](https://svelte.dev/) site using the [Sapper framework](https://sapper.svelte.dev/). Setup for unit testing with jest/testing-library and integration tests with cypress
4.  **`libs/my-svelte-components-library`**: A sample library for creating svelte components. Setup with storybook and unit testing with jest/testing-library
5.  **`package.json`**: This package file house the dependencies used monorepo-wide. Note the "scripts" used for management and CI/CD

## Monorepo Management

## CI/CD

This repository is setup with sample CI/CD using [Semaphore](semaphoreci.com/) and deploying to [Netlify](https://www.netlify.com/). Alternative providers of CI/CD such as [Travis CI](https://travis-ci.org/) or [Gitlab](https://docs.gitlab.com/ee/ci/) and hosts like [GitHub Pages](https://pages.github.com/) or [ZEIT](https://zeit.co/) Now have all their own requirements but will follow a similar setup.

**CI/CD Flow**
Each step explained below can be found in the .semaphore dir respectively titled semaphore.yml, my-site-build.yml and my-site-deploy.yml

1. **Install deps, link + test**: When a branch (e.g. master, develop, feature/\*) is pushed to remote git repo (eg. github), Semaphore pulls that branch then installs dependencies, checks packages, linting and runs test. The step is mainly for continuous integration and confirms the integrity of any branches pushed to the repo. Status of branches passing this stage can be used to help determine acceptability for merging PRs, etc.
2. **Build `my-site`**: If the previous passes and the branch is `master` or `develop`, then Semaphore builds the app **my-site** (apps/my-site). Sometimes errors may only occur during the build-cyle, so this stage can be used to check that a given app/library can be built. In this case, `my-site` is built for the purpose of deploying to production. Alternatively, this step could be used to build a library for publishing to NPM, etc.
3. **Deploy `my-site` to Netlify**: If `my-site` builds successfully, then it is deployed to Netlify. Ideally, then stage can be broken into two parts, where the build is a deployed to staging url and integration/e2e test run against it. If they pass, then the build is finally pushed to production.
