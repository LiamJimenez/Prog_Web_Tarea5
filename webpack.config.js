const path =  require('path');
const webpack = require('webpack');
const htmlwebpackPlugin = require('html-webpack-plugin');

module.exports={
mode:'development',
entry:'./src/cliente/js/agenda.js',
output:{
    filename: 'bundle.js'
},
module:{
    rules:[
        {
        test:/\.css$/,
        use:['style-loader','css-loader']
        }
    ]
},
plugins:[
    new htmlwebpackPlugin({
        template:'./src/cliente/index.html'
    })
]
};