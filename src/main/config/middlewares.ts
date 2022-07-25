import { bodyParser, contentType, cors, noCache } from '@/main/middlewares'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(contentType)
  app.use(cors)
  app.use(noCache)
}
