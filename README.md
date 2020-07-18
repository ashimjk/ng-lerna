# NgLerna

lerna version $TAG --conventional-commits --no-git-tag-version --no-push --no-granular-pathspec --no-changelog --yes

lerna version --conventional-prerelease --preid "${CI_COMMIT_SHORT_SHA}" --conventional-commits --no-push --no-changelog --yes

lerna publish --conventional-commits --conventional-prerelease --preid $(git rev-parse --short HEAD)-$(date +%s) --no-push --dist-tag latest --canary

## Use case
### Scenario 1
> lerna publish --no-push --no-changelog --conventional-commits --conventional-prerelease
- fix common    v6.0.1-alpha.0
- feat control  v6.1.0-alpha.0
- fix common    v6.1.0-alpha.1

### Scenario 2
- feat control
- feat common
- fix sample
