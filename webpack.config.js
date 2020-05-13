module.exports = {
    mode:"development", 
    watch: false,
    entry: {    
      broadcast: './test/sender.js',
      participant: './test/participant.js'
    },
    
    output: {
      path: __dirname + '/test/build',
      filename: '[name]-bundle.js'
    },
  }