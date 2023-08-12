module.exports = {
    plugins: [
        require('postcss-nested')(),
        require('autoprefixer')(),
    ],
    sourceMap: true,
};