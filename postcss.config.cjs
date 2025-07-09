module.exports = {
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('autoprefixer'),
        require('postcss-preset-env')({
            stage: 1,
            features: {
                'nesting-rules': true
            }
        }),
        require('cssnano')({ preset: 'default' })
    ]
}
