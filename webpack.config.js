const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: {
      bundle: path.resolve(__dirname, './src/index.js'),
    },

    // This property defines the file path and the file name which will be used for deploying the bundled file
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? '[name][contenthash].js' : '[name].js',
      // publicPath: '/',
      // assetModuleFilename: 'images/[name][hash][ext][query]',  // For handling images
      clean: true,  // Clean the dist folder on each build
    },

    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',

    // Development server configuration
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),  // Path to serve static files
      },
      compress: true,
      port: 8080,
      open: true,
      hot: true,
      historyApiFallback: true,
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
        favicon: './src/assets/images/MA-logo_white.png',
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        emitWarning: true,
        emitError: false,
        failOnError: false,
        failOnWarning: false,
        configType: 'flat',
      }),

      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/service-worker.js', to: 'service-worker.js' },
        ],
      }),
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.mjs'],
    },
  };
};
