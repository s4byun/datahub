var path = require('path');
var webpack = require('webpack');
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
	entry: './src/index.jsx',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
                options: {
                    presets: ['env', 'react', 'es2015'],
                    plugins: ['transform-class-properties']
                }
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		publicPath: bundlePath,
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 3000,
		publicPath: "http://localhost:3000/dist"
	},
	plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
