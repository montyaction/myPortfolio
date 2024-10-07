const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  // This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    // assetModuleFilename: 'images/[name][hash][ext][query]',  // For handling images
    clean: true,  // Clean the dist folder on each build
  },

  mode: 'development',

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Path to serve static files
    },
    compress: true,
    port: 3500, // Custom port
  },

  // Module rules and loaders
  module: {
    rules: [
      // JavaScript and JSX loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Presets for JS/JSX
          }
        },
      },
      // CSS loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Image loader
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]',
        },
      },
      // Font loader
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][hash][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/service-worker.js', to: 'service-worker.js' },
      ],
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};