const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'create' : './javascript/create.js',
	'Page3' : './javascript/Page3.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};