# NgLerna

lerna version $TAG --conventional-commits --no-git-tag-version --no-push --no-granular-pathspec --no-changelog --yes

lerna version --conventional-prerelease --preid "${CI_COMMIT_SHORT_SHA}" --conventional-commits --no-push --no-changelog --yes
