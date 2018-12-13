var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = 
{
   entry: SRC_DIR + "/app/components/index.js",
   output: { 
       path: DIST_DIR + "/app",
       filename:"main.js",
       chunkFilename: '[name].js',
       publicPath: "/app/"
   },

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


