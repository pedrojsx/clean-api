import express from 'express'
import handleSwagger from './config-swagger'
import handleMiddlewares from './middlewares'
import handleRoutes from './routes'

const app = express()

handleSwagger(app)
handleMiddlewares(app)
handleRoutes(app)

export default app
