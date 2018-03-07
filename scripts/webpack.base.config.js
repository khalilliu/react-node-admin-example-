
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-plugin');

function resolve(relatedPath){
	return path.resolve(__dirname, relatedPath);
}