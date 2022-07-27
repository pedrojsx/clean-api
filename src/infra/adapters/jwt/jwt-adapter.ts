import { JwtProtocols } from '@/data/protocols/jwt/jwt-protocol'
import jwt, { SignOptions } from 'jsonwebtoken'

export class JwtAdapter implements JwtProtocols {
  constructor (
    private readonly secret: string | Buffer,
    private readonly options?: SignOptions
  ) { }

  async signToken (data: any): Promise<string> {
    return jwt.sign(data, this.secret, this.options)
  }

  async validateToken (cipherText: string): Promise<string> {
    const plainText = jwt.verify(cipherText, this.secret) as string
    return plainText
  }
}
