var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API_HOST: '"ae.hackathon"',
  VUE_APP_API_PROTOCOL: '"http"',
  VUE_APP_CLIENT_ID: '"1_59z3qvtgtgso44cs4kw8gg8s8kckgo48w4kk8os0cswkogwo8o"',
  VUE_APP_CLIENT_SECRET: '"52ykd4lfplkws0s04c8cs4cc044g4s4sco4kw0ks8swcc0c4kc"'
})
