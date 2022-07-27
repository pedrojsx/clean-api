export class BusinessError extends Error {
  constructor (msg: string) {
    super(msg)
    this.name = 'Business Error'
  }
}
