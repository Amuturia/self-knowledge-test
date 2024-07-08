var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Amuturia:Apollemi.30@amcluster.ja8zp7r.mongodb.net/arkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://Amuturia:Apollemi.30@amcluster.ja8zp7r.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://Amuturia:Apollemi.30@amcluster.ja8zp7r.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
