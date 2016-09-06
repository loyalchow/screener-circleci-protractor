exports.config = {
  seleniumAddress: 'http://hub.screener.io/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
    build: process.env.CIRCLE_BUILD_NUM,
    screener: {
      name: 'Simple Test',
      resolution: '1280x1024',
    	apiKey: process.env.SCREENER_API_KEY,
    	group: process.env.SCREENER_GROUP_ID,
      environment: process.env.CIRCLE_BRANCH
    }
  }
};
