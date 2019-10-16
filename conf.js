exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
		browser.manage().window().setSize(1200, 6000);
		browser.waitForAngularEnabled(false);
		browser.driver.get("https://www.somesite.com");
	},
	onComplete: function(){
	},
    specs: ['spec.js'],
    multiCapabilities: [{ browserName: 'chrome' }],
    resultJsonOutputFile: '.result_file01.json' 
};