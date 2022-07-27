import { JwtProtocols } from '@/data/protocols/jwt/jwt-protocol'
import { JwtAdapter } from '@/infra/adapters/jwt/jwt-adapter'
import env from '@/main/config/env'

const makeJwtAdapterFactory = (): JwtProtocols => {
  return new JwtAdapter(env.jwt.secret)
}

export const jwtAdapterFactory = makeJwtAdapterFactory()
