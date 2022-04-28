start:
		npx webpack serve

install:
		npm ci

build:
		rm -rf dist
		npm run build

lint:
		npx eslint .
