import './config/module-alias'
import server from '@/main/config/app'
import env from './config/env'

server.listen(env.port, () => {
  console.log(`Environment: ${env.environment.toUpperCase()}`)
  console.log(`Server running on http://${env.serverHost}:${env.port}`)
})
