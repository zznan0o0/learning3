var config = {
	entery: 'main.js',

	output: {
		path:'./',
		filename: 'index.js'
	},

	devServer: {
		inline: true,
		port: 3000
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: 'babel',

			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}

module.export = config;