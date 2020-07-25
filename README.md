# NgLerna

lerna version $TAG --conventional-commits --no-git-tag-version --no-push --no-granular-pathspec --no-changelog --yes

-- other
lerna version --conventional-prerelease --preid "${CI_COMMIT_SHORT_SHA}" --conventional-commits --no-push --no-changelog --yes

-- updated
lerna version --conventional-prerelease --preid "$(git rev-parse --short HEAD)" --conventional-commits --no-push --no-changelog --yes --no-git-tag-version

lerna publish --conventional-commits --conventional-prerelease --preid $(git rev-parse --short HEAD)-$(date +%s) --no-push --dist-tag latest --canary

## Use case
### Scenario 1
> lerna publish --no-push --no-changelog --conventional-commits --conventional-prerelease
> Make commit and tag it
- fix common    v6.0.1-alpha.0
- feat control  v6.1.0-alpha.0
- fix common    v6.1.0-alpha.1

> lerna publish --no-push --no-changelog --conventional-commits --conventional-graduate
> Make commit and tag it
- common    v6.1.0
- control   v6.1.0
- common    v6.1.0

> lerna publish --no-push --no-changelog --canary --preid $(git rev-parse --short HEAD)-$(date +%s)
> Doesn't make commit and tag it
- fix common    6.1.1-1e985db-1595088865.1+1e985db
- feat control  6.1.1-d48814d-1595092763.2+d48814d
- fix common    6.1.1-e68b06e-1595092896.3+e68b06e

> lerna publish --no-push --no-changelog --conventional-commits
> Make commit and tag it
- fix common    v6.2.0
- feat control  v6.2.0
- fix common    v6.2.0

### Scenario 2
- feat control
- feat common
- fix sample
