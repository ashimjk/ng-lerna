publish:
  lerna publish --conventional-commits --conventional-prerelease --preid $(git rev-parse --short HEAD)-$(date +%s) --no-push
