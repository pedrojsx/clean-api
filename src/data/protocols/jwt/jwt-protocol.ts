export interface JwtProtocols {
  signToken: (data: any) => Promise<string>
  validateToken: (cipherText: string) => Promise<string | null>
}
