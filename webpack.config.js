var webpack = require("webpack");
var path = require("path");
var AsyncChunkNames = require('webpack-async-chunk-names-plugin');

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = 
{
   entry: SRC_DIR + "/app/index.js",
   output: { 
       path: DIST_DIR + "/app",
       filename:"main.js",
       chunkFilename: '[name].js',
       publicPath: "/app/"
   },

   plugins: [
    new AsyncChunkNames()
   ],

   optimization: {
     splitChunks: {
        cacheGroups: {
            default: false,
            vendors: false,

            // vendor chunk
            vendor: {
                // sync + async chunks
                chunks: 'all',
                name: 'vendor',
                // import file path containing node_modules
                test: /node_modules/
            }
        }
    }
   },

  module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          
        ]
      },

      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    
    

};          


module.exports = config;


