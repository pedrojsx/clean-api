import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

export default async (app: Express): Promise<void> => {
  const appRouter = Router()

  app.use('/api/v1', appRouter)
  const routes = readdirSync(path.resolve(__dirname, '..', 'routes'))
  for (const file of routes) {
    if (!file.includes('.map') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(appRouter)
    }
  }
}
