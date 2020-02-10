# Svelte Monorepo Starter

## CI/CD

This repository is setup with sample CI/CD using [Semaphore](semaphoreci.com/) and deploying to [Netlify](https://www.netlify.com/). Alternative providers of CI/CD such as [Travis CI](https://travis-ci.org/) or [Gitlab](https://docs.gitlab.com/ee/ci/) and hosts like [GitHub Pages](https://pages.github.com/) or [ZEIT](https://zeit.co/) Now have all their own requirements but will follow a similar setup.

**CI/CD Flow**
Each step explained below can be found in the .semaphore dir respectively titled semaphore.yml, my-site-build.yml and my-site-deploy.yml

1. **Install deps, link + test**: When a branch (e.g. master, develop, feature/\*) is pushed to remote git repo (eg. github), Semaphore pulls that branch then installs dependencies, checks packages, linting and runs test. The step is mainly for continuous integration and confirms the integrity of any branches pushed to the repo. Status of branches passing this stage can be used to help determine acceptability for merging PRs, etc.
2. **Build `my-site`**: If the previous passes and the branch is `master` or `develop`, then Semaphore builds the app **my-site** (apps/my-site). Sometimes errors may only occur during the build-cyle, so this stage can be used to check that a given app/library can be built. In this case, `my-site` is built for the purpose of deploying to production. Alternatively, this step could be used to build a library for publishing to NPM, etc.
3. **Deploy `my-site` to Netlify**: If `my-site` builds successfully, then it is deployed to Netlify. Ideally, then stage can be broken into two parts, where the build is a deployed to staging url and integration/e2e test run against it. If they pass, then the build is finally pushed to production.
