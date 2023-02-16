const nodeExternals = require('webpack-node-externals');

module.exports = {
  // ... other Webpack configuration options ...
  target: 'node', // Set the target to Node.js
  externals: [nodeExternals()], // Exclude Node.js modules from the bundle
  // ... other Webpack configuration options ...
};
