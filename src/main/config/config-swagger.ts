import { noCache } from '@/main/middlewares'
import apiDocumentation from '@/main/swagger/swagger.json'
import { Express } from 'express'
import { serve, setup } from 'swagger-ui-express'

export default (app: Express): void => {
  app.use('/api-docs', noCache, serve, setup(apiDocumentation))
}
