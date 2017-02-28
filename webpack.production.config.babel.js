import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';

export default {
  devtool: 'eval-source-map',
  entry: [
    `${__dirname}/src/index.jsx`,
  ],
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader' },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: process.argv.indexOf('-p') === -1 ? null : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi],
    }),       // skip pre-minified libs
    new webpack.optimize.DedupePlugin(), // dedupe similar code
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoErrorsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
  ],
};
