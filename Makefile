install:
	npm install
start:
	npm run babel-node -- src/bin/brain-balance.js
publish:
	npm publish
build:
	npm run build
lint:
	npx eslint .

