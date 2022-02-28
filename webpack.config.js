module.exports = {
    mode:"development", 
    watch: false,
    entry: {    
      example: './example/src/blend.js',

    },
    
    output: {
      path: __dirname + '/example/build',
      filename: '[name]-bundle.js'
    },
  }