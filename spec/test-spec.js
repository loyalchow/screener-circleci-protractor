describe('Protractor Example', function() {
  it('should take snapshot of homepage', function() {
    var baseUrl = 'http://' + process.env.CIRCLE_BRANCH + '.127.0.0.1.xip.io:8080';
    browser.driver.get(baseUrl);
    browser.driver.executeScript('/*@screener.snapshot*/', 'Home');
  });
});
