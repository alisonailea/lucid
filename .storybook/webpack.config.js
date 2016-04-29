const path = require('path');
const webpack = require('webpack');

module.exports = {
	plugins: [
    new webpack.NormalModuleReplacementPlugin(/^\.\/layout$/, 'custom-layout')
  ],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
      'custom-layout': path.resolve('.storybook/layout.js')
    }
	},
	module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [path.resolve('./node_modules'), path.resolve(__dirname, 'node_modules')],
        include: [path.resolve('./'), __dirname],
      },
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader?modules&sourceMap!less?sourceMap',
				include: path.resolve(__dirname, '../src/components/')
			},
    ]
  }
};
