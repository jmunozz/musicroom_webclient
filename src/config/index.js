const env = process.env.REACT_APP_ENV || 'dev'

const config = {
    dev: require('./config.dev.json'),
    prod: require('./config.prod.json'),
}

export default config[env]