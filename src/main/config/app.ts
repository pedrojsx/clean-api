import express from 'express'
import handleSwagger from './config-swagger'
import handleMiddlewares from './middlewares'

const app = express()

handleSwagger(app)
handleMiddlewares(app)

export default app
