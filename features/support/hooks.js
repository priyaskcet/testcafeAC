const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
const {AfterAll,BeforeAll, setDefaultTimeout, Before, After, Status} = require('cucumber');
const errorHandling = require('../support/errorHandling');
const { doesNotMatch } = require('assert');

const TIMEOUT = 20000;
const callback =require('testcafe');

let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

function createTestFile() {
    fs.writeFileSync('test.js',
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)')
}

function runTest(iteration, browser) {
    createTestCafe('localhost', 1337, 1338)
    .then(tc => {
      testCafe = tc;
      const runner = testCafe.createRunner();
  
      return runner
        .src(['./test.js'])
        .browsers(['chrome:headless'])
        .screenshots('.reports/screenshots/',true)
        .concurrency(8)
        .run();
    })
    .then(failedCount => {
      console.log('Tests failed: ' + failedCount);
      testCafe.close();
    });
}
setDefaultTimeout(TIMEOUT);
Before(function () {
       runTest(n, this.setBrowser());
       createTestFile();
    n += 2;
   setDefaultTimeout(TIMEOUT);
    setTimeout(callback, TIMEOUT);
    return this.waitForTestController.then(function(testController) {
        return testController.maximizeWindow();
       
    });
});


After(async function(testCase) {
    
    const world = this;
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true;
        attachScreenshotToReport = world.attachScreenshotToReport;
        errorHandling.addErrorToController();
        
        await errorHandling.ifErrorTakeScreenshot(testController)
       
    }
});

AfterAll(function() {
    let intervalId = null;
   // setDefaultTimeout(TIMEOUT);
    
    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500);
    }
    function checkLastResponse() {
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            cafeRunner.close();
            process.exit();
            clearInterval(intervalId);
        }
        process.exit();
    }
   
    waitForTestCafe();
     
});

const getIsTestCafeError = function() {
    return isTestCafeError;
};

const getAttachScreenshotToReport = function(path) {
    return attachScreenshotToReport(path);
};

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;
