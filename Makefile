install:
	npm install
start:
	npm run babel-node -- src/bin/brain-gcd.js
publish:
	npm publish
build:
	npm run build
lint:
	npx eslint .

