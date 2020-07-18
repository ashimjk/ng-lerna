publish:
	lerna publish --conventional-commits --conventional-prerelease --preid $(git rev-parse --short HEAD)-$(date +%s) --no-push

clean:
	git reset --soft HEAD~1 && git reset . && git checkout .

