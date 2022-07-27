export default {
  environment: process.env.AP_ENVIRONMENT || 'local',
  serverHost: process.env.API_SERVER || 'localhost',
  port: process.env.API_PORT || 3333,

  jwt: {
    secret: 'onfly'
  }
}
