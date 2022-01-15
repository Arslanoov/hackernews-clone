dev:
	cd app && npm start

build:
	cd app && npm build

install-deps:
	cd app && npm i

test: test-jest test-e2e

test-jest:
	cd app && npm run test:jest

test-e2e:
	cd app && npm run test:e2e

lint:
	cd app && npm run lint:js

lint-fix:
	cd app && npm run lint:js:fix