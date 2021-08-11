

1. `npm install cypress --save-dev`
2. npm script

```json
{
  "name": "popcat",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "cypress open",
    "test-one": "cypress run --spec **/popcat.spec.js"
  },
  "author": "",
  "license": "ISC"
}
```

3. cypress.json

```json
{
  "viewportWidth": 411,
  "viewportHeight": 731,
  "defaultCommandTimeout": 8000,
  "requestTimeout": 8000,
  "retries": 5,
  "video": true,
  "videoUploadOnPasses": false,
  "chromeWebSecurity": false,
  "reporter": "junit",
  "ignoreTestFiles": "**/examples/*.js",
  "reporterOptions": {
    "mochaFile": "results/TEST-[hash].xml"
  }
}

```

- fixtures: 存放假資料或是常數值
- integration: 測試撰寫的地方


