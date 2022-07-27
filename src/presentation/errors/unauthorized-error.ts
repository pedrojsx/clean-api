export class UnauthorizedError extends Error {
  constructor (msg?: string) {
    super(msg ?? 'Acesso não autorizado')
    this.name = 'UnauthorizedError'
  }
}
