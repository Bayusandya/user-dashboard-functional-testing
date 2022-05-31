# selenium-cucumber-js

## Installation

```bash
npm install selenium-cucumber-js --save-dev
```

## Usage

```bash
node ./node_modules/selenium-cucumber-js/index.js -s ./step-definitions
```

### Options

```bash
-h, --help                          output usage information
-V, --version                       output the version number
-s, --steps <path>                  path to step definitions. defaults to ./step-definitions
-p, --pageObjects <path>            path to page objects. defaults to ./page-objects
-o, --sharedObjects [paths]         path to shared objects (repeatable). defaults to ./shared-objects
-b, --browser <path>                name of browser to use. defaults to chrome
-k, --browser-teardown <optional>   browser teardown strategy after every scenario (always, clear, none). defaults to "always"
-r, --reports <path>                output path to save reports. defaults to ./reports
-d, --disableLaunchReport           disable the auto opening the browser with test report
-j, --junit <path>                  output path to save junit-report.xml defaults to ./reports
-t, --tags <tagName>                name of tag to run
-f, --featureFile <path>            a specific feature file to run
-x, --timeOut <n>                   steps definition timeout in milliseconds. defaults to 10 seconds
-n, --noScreenshot                  disable auto capturing of screenshots when an error is encountered
```