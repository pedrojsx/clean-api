import express from 'express'
import handleSwagger from './config-swagger'
import handleMiddlewares from './middlewares'

const server = express()

handleSwagger(server)
handleMiddlewares(server)

export { server }
