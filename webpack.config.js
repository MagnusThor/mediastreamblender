module.exports = {
    mode:"development", 
    watch: false,
    entry: {    
      testapp: './test/test.js'
    },
    
    output: {
      path: __dirname + '/test/build',
      filename: '[name]-bundle.js'
    },
  }