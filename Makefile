start:
		npx webpack serve

install:
		npm ci

build:
		rm -rf dist
		npm run build

lint:
		npx eslint .

test:
		npm run test
	
watch:
		test-watch

cover:
		test-cover
