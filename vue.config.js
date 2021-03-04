module.exports = {
	configureWebpack: {
		devServer: {
			historyApiFallback: true,
			noInfo: true,
			overlay: true,
			proxy: 'http://localhost:8081'
		}
	},
	pages: {
		index: {
			entry: 'src/main.js',
			title: 'AO Upload Rates'
		}
	}
}