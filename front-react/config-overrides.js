const path = require('path')

module.exports = function override(config, env) {
    config["resolve"] = {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            routes: path.resolve(__dirname, 'src/routes'),
        },
        extensions: ['.js']
    }

    return config;
}