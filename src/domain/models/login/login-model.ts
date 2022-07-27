export namespace LoginModel {
  export type Input = {
    email: string
    password: string
  }
  export type Output = {
    email: string
    dateLogin: Date
  }
}
