import { bodyParser, contentType, bodyParserUrlEnconded, cors } from '@/main/middlewares'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(bodyParserUrlEnconded)
  app.use(cors)
  app.use(contentType)
}
