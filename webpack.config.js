const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: false,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#6973FF',
                'link-color': '#6973FF',
                'text-color': '#5D637E',
                'heading-color': '#373B52',
                // 'text-color-secondary': 'rgba(55,59,82,.5)',
                'playground-background-color': '#F3F3F7',
                'section-background-color': '#F9F9FC',
                'font-size-header': '24px',
                'font-size-display': '20px',
                'font-size-head': '16px',
                'font-size-base': '14px',
                'font-size-caption': '12px',
                'disabled-color': 'rgba(55,59,82,.3)',
                'border-color-base': '#E9E9E9',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  externals: {
    // vue: 'Vue',
    // 'vue-router': 'VueRouter',
    // d3: 'd3',
    // 'vue-grid-layout': 'VueGridLayout',
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
}
